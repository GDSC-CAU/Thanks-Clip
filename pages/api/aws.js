import { VERSION } from "remotion/version"
import { DEPLOY_CONFIG } from "../../constant/deployConfig.js"

const getDeployedLambdaFunctionName = () =>
    `remotion-render-${VERSION.replace(/\./g, "-")}-mem${
        DEPLOY_CONFIG.RAM
    }mb-disk${DEPLOY_CONFIG.DISK}mb-${DEPLOY_CONFIG.TIMEOUT}sec`

/** 배포할 AWS 지역 목록입니다.
 * @returns {[
    "us-east-1",
    "us-east-2",
    "us-west-1",
    "us-west-2",

    "ap-south-1",
    "ap-east-1",
    "ap-southeast-1",
    "ap-southeast-2",
    "ap-northeast-1",
    "ap-northeast-2",
    "ap-northeast-3",
    "ca-central-1",

    "eu-central-1",
    "eu-west-1",
    "eu-west-2",
    "eu-west-3",
]}
 */
const getAWSRegions = () => [
    "us-east-1",
    "us-east-2",
    "us-west-1",
    "us-west-2",
    "ap-southeast-1",
    "ap-south-1",
    "ap-southeast-2",
    "ap-northeast-1",
    "ap-northeast-2",
    "ap-northeast-3",
    "ca-central-1",
    "eu-central-1",
    "eu-west-1",
    "eu-west-2",
    "eu-west-3",
]

const getRandomAWSRegion = () => {
    const regions = getAWSRegions()
    return regions[Math.floor(Math.random() * regions.length)]
}

const getAWSAccountCount = () => {
    let count = 0
    while (
        process.env[`AWS_KEY_${count + 1}`] &&
        process.env[`AWS_SECRET_${count + 1}`]
    ) {
        count++
    }

    return count
}

const getRandomAwsAccount = () =>
    Math.ceil(Math.random() * getAWSAccountCount())

/**
 * remotion을 위한 aws환경 변수를 설정합니다.
 * ```bash
 * # 환경변수는 다음과 같이 저장해주세요
 * AWS_KEY_1=유저1
 * AWS_SECRET_1=유저1_배포_키
 *
 * AWS_KEY_2=유저2
 * AWS_SECRET_2=유저2_배포_키
 * ```
 * @param {number} keyOrder
 */
const setEnvForRemotionAWSDeploy = (keyOrder) => {
    process.env.REMOTION_AWS_ACCESS_KEY_ID = process.env[`AWS_KEY_${keyOrder}`]
    process.env.REMOTION_AWS_SECRET_ACCESS_KEY =
        process.env[`AWS_SECRET_${keyOrder}`]
}

export {
    setEnvForRemotionAWSDeploy,
    getDeployedLambdaFunctionName,
    getAWSAccountCount,
    getAWSRegions,
    getRandomAwsAccount,
    getRandomAWSRegion,
}
