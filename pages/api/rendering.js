/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { getRenderProgress, renderMediaOnLambda } from "@remotion/lambda/client"
import { DEPLOY_CONFIG } from "../../constant/deployConfig.js"
import { LETTER_SIZE } from "../../constant/letter.js"
import { pathBase } from "../../constant/path.js"
import {
    getDeployedLambdaFunctionName,
    getRandomAWSRegion,
    getRandomAwsAccount,
    setEnvForRemotionAWSDeploy,
} from "../../utils/aws.js"

/**
 * @note `client letterProps`를 `server videoProps`로 변환
 * @param {Required<import("../../atoms/letter").Letter>} letterProps
 * @returns {Promise<import("../../video/CompositionServer").LetterVideoProps>}
 */
const getServerVideoProps = async (letterProps) => {
    /**
     * @note `remotion`에서 요청할 letter Text `Image`경로
     */
    const letterImageURL = `${pathBase}/api/image?font=${letterProps.font}&from=${letterProps.from}&to=${letterProps.to}&letter=${letterProps.letter}&lettertype=${letterProps.letterType}`

    return {
        size: LETTER_SIZE,
        letterImageURL,
        to: letterProps.to,
        tags: letterProps.tags,
        stickers: letterProps.stickers,
        letterType: letterProps.letterType,
        backgroundColor: letterProps.backgroundColor,
    }
}

/**
 * @note `AWS lambda` 렌더링 시도, `AWS bucket`에 업로드
 * @param {import("../../../video/Composition").LetterVideoProps} videoProps video rendering `server` props, passing to `<CompositionServer {...inputProps} />`
 */
const encodeVideo = async (videoProps) => {
    // 분산 렌더링
    const randomRegion = getRandomAWSRegion()
    const randomAccount = getRandomAwsAccount()

    try {
        setEnvForRemotionAWSDeploy(randomAccount)

        const deployedLambdaFunctionName = getDeployedLambdaFunctionName()

        const { renderId, bucketName } = await renderMediaOnLambda({
            region: randomRegion,
            functionName: deployedLambdaFunctionName,
            serveUrl: DEPLOY_CONFIG.BUCKET.SITE_NAME,

            composition: DEPLOY_CONFIG.VIDEO_COMPOSITION_ID,
            framesPerLambda: DEPLOY_CONFIG.FRAMES_PER_LAMBDA,

            inputProps: videoProps,

            codec: "h264",
            maxRetries: 1,
            scale: 1.5,
            privacy: "public",
            imageFormat: "jpeg",
            downloadBehavior: {
                type: "download",
                fileName: "thanksClip.mp4",
            },
        })

        return {
            renderId,
            bucketName,
            region: randomRegion,
            account: randomAccount,
        }
    } catch (err) {
        console.warn(`error is occurred in ${randomRegion}`)
        console.warn(err)
        return {
            renderId: null,
            bucketName: null,
            region: null,
            account: randomAccount,
        }
    }
}

/**@typedef {Promise<{type: "progress" | "success" | "error", downloadUrl: string | null, outputSize: number | null, errorMessage: string | null, bucketName: string | null, region: string | null }>} RenderingProgress */
/**
 * @note `AWS s3` ~ 렌더링 상태 조회
 * @param {{renderId: string | null, bucketName: string | null, region: string | null, account: number}} renderProgress
 * @returns {RenderingProgress}
 */
const getVideoRenderingProgress = async ({
    bucketName,
    region,
    renderId,
    account,
}) => {
    setEnvForRemotionAWSDeploy(account)

    if (bucketName === null || region === null || renderId === null) {
        return {
            type: "error",
            downloadUrl: null,
            outputSize: null,
            bucketName,
            region,
            errorMessage: `Can't find ${bucketName} in ${region}`,
        }
    }

    try {
        const deployedLambdaFunctionName = getDeployedLambdaFunctionName()

        const progress = await getRenderProgress({
            renderId,
            bucketName,
            region,
            functionName: deployedLambdaFunctionName,
        })

        if (progress === null || progress.fatalErrorEncountered) {
            return {
                type: "error",
                downloadUrl: null,
                errorMessage: progress.errors
                    .map((e) => JSON.stringify(e))
                    .reduce((e) => `${e}\n`),
                bucketName,
                region,
                outputSize: null,
            }
        }

        if (!progress.renderId || !progress.bucket) {
            return {
                type: "progress",
                downloadUrl: null,
                errorMessage: null,
                outputSize: null,
                bucketName,
                region,
            }
        }

        if (progress.outputFile) {
            return {
                type: "success",
                downloadUrl: progress.outputFile,
                outputSize: progress.outputSizeInBytes,
                errorMessage: null,
                bucketName,
                region,
            }
        }
    } catch (e) {
        return {
            type: "error",
            downloadUrl: null,
            errorMessage: e,
            outputSize: null,
            bucketName,
            region,
        }
    }

    return {
        type: "progress",
        downloadUrl: null,
        errorMessage: null,
        outputSize: null,
        bucketName,
        region,
    }
}

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 * @returns
 */
export default async function handler(req, res) {
    const urlSearchParams = new URLSearchParams(req.query)

    const bucketName = urlSearchParams.get("bucketName")
    const region = urlSearchParams.get("region")
    const renderId = urlSearchParams.get("renderId")
    const account = urlSearchParams.get("account")

    try {
        /**@type {{renderId: string | null; bucketName: string | null; region: string | null;}} */
        const progress = await getVideoRenderingProgress({
            bucketName,
            region,
            renderId,
            account,
        })
        res.status(200).json(progress)
    } catch (e) {
        res.status(403).json({
            type: "error",
            downloadUrl: null,
            outputSize: null,
            errorMessage: e,
            bucketName,
            region,
        })
    }
}

export { encodeVideo, getServerVideoProps as transformVideoProps }
