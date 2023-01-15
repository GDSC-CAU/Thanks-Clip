//@ts-check
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { getRenderProgress, renderMediaOnLambda } from "@remotion/lambda/client"
import { DEPLOY_CONFIG } from "../../constant/deployConfig.js"
import {
    getDeployedLambdaFunctionName,
    getRandomAWSRegion,
    getRandomAwsAccount,
    setEnvForRemotionAWSDeploy,
} from "./aws.js"

const encodeVideo = async (videoProps) => {
    // 모든 지역에 배포된 aws lambda함수 중, 임의의 lambda호출
    const randomRegion = getRandomAWSRegion()
    // 랜덤한 aws 계정 가져오기
    const randomAccount = getRandomAwsAccount()

    try {
        setEnvForRemotionAWSDeploy(randomAccount)

        const deployedLambdaFunctionName = getDeployedLambdaFunctionName()

        const { renderId, bucketName } = await renderMediaOnLambda({
            region: randomRegion,
            functionName: deployedLambdaFunctionName,
            serveUrl: DEPLOY_CONFIG.SITE_NAME,
            composition: DEPLOY_CONFIG.VIDEO_COMPOSITION_ID,

            inputProps: videoProps, //!TODO: 영상을 제작할 때 필요한 props => !! cookies로 사용을 해야됨 클라이언트 상태를 조회할 수 없음 !!

            codec: "h264",
            maxRetries: 1,
            privacy: "public",
            imageFormat: "jpeg",
            downloadBehavior: {
                type: "download",
                fileName: `thanksClip.mp4`,
            },
            framesPerLambda: 10,
        })

        return { renderId, bucketName, region: randomRegion }
    } catch (err) {
        console.warn(`error is occurred in ${randomRegion}`)
        console.warn(err)
        return { renderId: null, bucketName: null, region: null }
    }
}

/**@typedef {Promise<{type: "progress" | "success" | "error", downloadUrl: string | null, outputSize: number | null, errorMessage: string | null, bucketName: string | null, region: string | null }>} RenderingProgress */
/**
 * @param {{renderId: string | null, bucketName: string | null, region: string | null}} renderProgress
 * @returns {RenderingProgress}
 */
const getVideoRenderingProgress = async ({ bucketName, region, renderId }) => {
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

    const deployedLambdaFunctionName = getDeployedLambdaFunctionName()
    const progress = await getRenderProgress({
        renderId,
        bucketName,
        functionName: deployedLambdaFunctionName,
        // @ts-ignore
        region,
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
    /**@type {{renderId: string | null; bucketName: string | null; region: string | null;}} */
    const encodeData = JSON.parse(req.body)

    const progress = await getVideoRenderingProgress(encodeData)

    res.status(200).json(progress)
}

export { encodeVideo }
