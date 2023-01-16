/* eslint-disable no-console */
/* eslint-disable no-undef */
import path from "path"
import { deployFunction, deploySite, getOrCreateBucket } from "@remotion/lambda"
import chalk from "chalk"
import dotenv from "dotenv"
import { DEPLOY_CONFIG } from "../constant/deployConfig.js"
import {
    getAWSAccountCount,
    getAWSRegions,
    setEnvForRemotionAWSDeploy,
} from "../pages/api/aws.js"

dotenv.config()

/**
 * 등록된 aws계정(N개)에 lambda와 s3 bucket을 배포합니다
 */
const deployLambdaAndS3Bucket = async () => {
    const accountCount = getAWSAccountCount()
    for (
        let currentAccountCount = 1;
        currentAccountCount <= accountCount;
        currentAccountCount++
    ) {
        console.log(
            chalk.bold.greenBright(
                "\n----------------------------------------------------------------------------------------------------------\n"
            )
        )

        console.log(chalk.bold.greenBright(`account: ${currentAccountCount}`))
        console.log("\n")

        for (const awsRegion of getAWSRegions()) {
            try {
                setEnvForRemotionAWSDeploy(currentAccountCount)

                const { functionName, alreadyExisted } = await deployFunction({
                    architecture: "arm64",
                    createCloudWatchLogGroup: true,
                    memorySizeInMb: DEPLOY_CONFIG.RAM,
                    diskSizeInMb: DEPLOY_CONFIG.DISK,
                    timeoutInSeconds: DEPLOY_CONFIG.TIMEOUT,
                    region: awsRegion,
                })

                console.log(
                    `${chalk.bold.greenBright(
                        `REGION: ${awsRegion}\nRAM: ${DEPLOY_CONFIG.RAM}mb\nDISK: ${DEPLOY_CONFIG.DISK}mb`
                    )}`
                )
                console.log(
                    `${chalk.bold.bgGreen(
                        alreadyExisted
                            ? " ✅ Ensured: aws lambda "
                            : " 🚀 Deployed: aws lambda "
                    )} "${chalk.bold.underline(functionName)}"`
                )

                const { bucketName } = await getOrCreateBucket({
                    region: awsRegion,
                })
                const { serveUrl } = await deploySite({
                    bucketName,
                    siteName: DEPLOY_CONFIG.SITE_NAME,
                    entryPoint: path.join(
                        process.cwd(),
                        DEPLOY_CONFIG.VIDEO_ENTRY_POINT
                    ),
                    region: awsRegion,
                })

                console.log(
                    `${chalk.bold.bgGreen(
                        " 🚀 Deployed: aws S3 "
                    )} "${chalk.bold.underline(serveUrl)}"`
                )
                console.log("\n")
            } catch (e) {
                console.log(
                    chalk.bold.bgRedBright(
                        ` error is occurred in ${awsRegion} `
                    )
                )
                console.log(chalk.bold.whiteBright(e))
                console.log("\n")
            }
        }
    }

    console.log(
        chalk.bold.greenBright(
            "\n----------------------------------------------------------------------------------------------------------\n"
        )
    )
}

await deployLambdaAndS3Bucket()
