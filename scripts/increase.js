/* eslint-disable no-undef */
/* eslint-disable no-console */
//@ts-check
import { getAwsClient } from "@remotion/lambda"
// @ts-ignore
import dotenv from "dotenv"
import { CONFIG } from "../constant/deployConfig.js"

dotenv.config()

const execute = async () => {
    const { client, sdk } = getAwsClient({
        region: CONFIG.DEPLOY_REGION,
        service: "servicequotas",
    })

    const quota = await client.send(
        new sdk.GetServiceQuotaCommand({
            QuotaCode: "L-B99A9384",
            ServiceCode: "lambda",
        })
    )

    console.log(CONFIG.DEPLOY_REGION, quota.Quota?.Value)

    if ((quota.Quota?.Value ?? 0) < 1000) {
        console.log(`Quota for ${CONFIG.DEPLOY_REGION} is not 1000!`)
        const openCases = await client.send(
            new sdk.ListRequestedServiceQuotaChangeHistoryByQuotaCommand({
                QuotaCode: "L-B99A9384",
                ServiceCode: "lambda",
            })
        )
        const openCase = openCases.RequestedQuotas?.find(
            (r) => r.Status === "CASE_OPENED"
        )
        if (openCase) {
            console.log("already requested, skipping")
        }
        await client.send(
            new sdk.RequestServiceQuotaIncreaseCommand({
                QuotaCode: "L-B99A9384",
                DesiredValue: 1000,
                ServiceCode: "lambda",
            })
        )
        console.log("requested increase to 1000")
    }
}

execute()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
