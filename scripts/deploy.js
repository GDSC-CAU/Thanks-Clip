/* eslint-disable no-console */
/* eslint-disable no-undef */
//@ts-check
import path from "path"
import { deployFunction, deploySite, getOrCreateBucket } from "@remotion/lambda"
// @ts-ignore
import dotenv from "dotenv"
import { CONFIG } from "../constant/deployConfig.js"

dotenv.config()

const execute = async () => {
    const { functionName, alreadyExisted } = await deployFunction({
        architecture: "arm64",
        createCloudWatchLogGroup: true,
        memorySizeInMb: CONFIG.RAM,
        timeoutInSeconds: CONFIG.TIMEOUT,
        region: CONFIG.DEPLOY_REGION,
    })
    console.log(
        `${
            alreadyExisted ? "Ensured" : "Deployed"
        } function "${functionName}" to ${CONFIG.DEPLOY_REGION} in account`
    )
    const { bucketName } = await getOrCreateBucket({
        region: CONFIG.DEPLOY_REGION,
    })
    const { serveUrl } = await deploySite({
        bucketName,
        siteName: CONFIG.SITE_NAME,
        entryPoint: path.join(process.cwd(), CONFIG.VIDEO_ENTRY_POINT),
        region: CONFIG.DEPLOY_REGION,
    })
    console.log(
        `Deployed site to ${CONFIG.DEPLOY_REGION} in account under ${serveUrl}`
    )
}

execute()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
