/* eslint-disable no-console */
import { getAwsClient } from "@remotion/lambda"
import chalk from "chalk"
import dotenv from "dotenv"
import {
    getAWSAccountCount,
    getAWSRegions,
    setEnvForRemotionAWSDeploy,
} from "../pages/api/_aws/index.js"

dotenv.config()

const LAMBDA_CONCURRENCY_LIMIT_QUOTA = "L-B99A9384"

const accountCount = getAWSAccountCount()

console.log(
    "\n",
    chalk.bold.whiteBright(
        `Found ${accountCount} accounts. Increase concurrency limit...`
    ),
    "\n"
)

/**
 * 등록된 aws계정(N개)에 lambda concurrency limit 제한량을 1000으로 올리는 요청을 합니다
 * @note 동영상 렌더링 속도를 올리기 위해 필요한 과정입니다
 */
const increaseLambdaQuota = async () => {
    for (
        let currentAccountCount = 1;
        currentAccountCount <= accountCount;
        currentAccountCount++
    ) {
        console.log(
            chalk.bold.whiteBright(
                "\n----------------------------------------------------------------------------------------------------------\n"
            )
        )

        console.log(chalk.bold.whiteBright(`account: ${currentAccountCount}`))
        console.log("\n")

        for (const awsRegion of getAWSRegions()) {
            try {
                setEnvForRemotionAWSDeploy(currentAccountCount)

                const { client, sdk } = getAwsClient({
                    region: awsRegion,
                    service: "servicequotas",
                })

                const lambdaQuota = await client.send(
                    new sdk.GetServiceQuotaCommand({
                        ServiceCode: "lambda",
                        QuotaCode: LAMBDA_CONCURRENCY_LIMIT_QUOTA,
                    })
                )

                console.log(
                    chalk.bold.bgYellowBright(
                        ` ${awsRegion} currency limit: ${lambdaQuota.Quota?.Value} `
                    )
                )

                if ((lambdaQuota.Quota?.Value ?? 0) < 1000) {
                    console.log(
                        chalk.bold.redBright(
                            `lambda quota is not 1000 in ${currentAccountCount} ${awsRegion}`
                        )
                    )

                    const openCases = await client.send(
                        new sdk.ListRequestedServiceQuotaChangeHistoryByQuotaCommand(
                            {
                                ServiceCode: "lambda",
                                QuotaCode: LAMBDA_CONCURRENCY_LIMIT_QUOTA,
                            }
                        )
                    )
                    const openCase = openCases.RequestedQuotas?.find(
                        (r) => r.Status === "CASE_OPENED"
                    )

                    if (openCase) {
                        console.log(`already requested in ${awsRegion}...`)
                        continue
                    }

                    await client.send(
                        new sdk.RequestServiceQuotaIncreaseCommand({
                            ServiceCode: "lambda",
                            DesiredValue: 1000,
                            QuotaCode: LAMBDA_CONCURRENCY_LIMIT_QUOTA,
                        })
                    )

                    console.log(
                        chalk.bold.greenBright(
                            "lambda function quota increased to 1000"
                        )
                    )
                }
            } catch (e) {
                console.log(
                    chalk.bold.bgRedBright(
                        ` error is occurred in ${awsRegion} `
                    )
                )

                console.log(chalk.bold(e))
            }
        }
    }

    console.log(
        chalk.bold.whiteBright(
            "\n----------------------------------------------------------------------------------------------------------\n"
        )
    )
}

await increaseLambdaQuota()
