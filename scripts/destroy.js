/* eslint-disable no-undef */
/* eslint-disable no-console */
// Extremely destructive script. Deletes all buckets in your account.
import { getAwsClient, getOrCreateBucket } from "@remotion/lambda"
import chalk from "chalk"
import dotenv from "dotenv"
import chunk from "lodash.chunk"
import {
    getAWSAccountCount,
    getAWSRegions,
    setEnvForRemotionAWSDeploy,
} from "../pages/api/aws.js"

dotenv.config()

const accountCount = getAWSAccountCount()

console.log(
    "\n",
    chalk.bold.redBright(
        `Found ${accountCount} accounts. Destroy S3 Buckets...`
    ),
    "\n"
)

/**
 * 등록된 aws계정(N개)에 s3 bucket을 삭제합니다
 */
const destroyDeployedS3Buckets = async () => {
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

                const { client, sdk } = getAwsClient({
                    service: "s3",
                    region: awsRegion,
                    customCredentials: null,
                })

                const s3Bucket = await getOrCreateBucket({ region: awsRegion })

                const files = await client.send(
                    new sdk.ListObjectsCommand({
                        Bucket: s3Bucket.bucketName,
                    })
                )

                const chunks = chunk(files.Contents ?? [], 10)
                for (const fileChunk of chunks) {
                    await Promise.all(
                        fileChunk.map((file) =>
                            client.send(
                                new sdk.DeleteObjectCommand({
                                    Bucket: s3Bucket.bucketName,
                                    Key: file.Key,
                                })
                            )
                        )
                    )

                    console.log(
                        chalk.bold.bgRedBright(
                            ` deleted count: ${chalk.underline(
                                fileChunk.length
                            )}, `
                        ),
                        chalk.bold.whiteBright(fileChunk.map((f) => f.Key)),
                        "\n",

                        chalk.bold.bgRedBright(" bucket "),
                        chalk.bold.whiteBright(s3Bucket.bucketName),
                        "\n",

                        chalk.bold.bgRedBright(" region "),
                        chalk.bold.whiteBright(awsRegion),
                        "\n",
                        chalk.bold.bgRedBright(" account "),
                        chalk.bold.whiteBright(currentAccountCount),
                        "\n"
                    )
                }

                await client.send(
                    new sdk.DeleteBucketCommand({
                        Bucket: s3Bucket.bucketName,
                    })
                )
            } catch (e) {
                console.log(
                    chalk.bold.bgRedBright(
                        ` error is occurred in ${awsRegion} `
                    )
                )

                console.log(chalk.bold.whiteBright(e))
            }
        }
    }

    console.log(
        chalk.bold.greenBright(
            "\n----------------------------------------------------------------------------------------------------------\n"
        )
    )
}

await destroyDeployedS3Buckets()
