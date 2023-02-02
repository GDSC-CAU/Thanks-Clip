import { VERSION } from "remotion/version"
import { DEPLOY_CONFIG } from "../constant/deployConfig.js"

/**
 * @note `AWS lambda`에 배포된 `remotion` 함수 이름
 */
const getDeployedLambdaFunctionName = () =>
    `remotion-render-${VERSION.replace(/\./g, "-")}-mem${
        DEPLOY_CONFIG.LAMBDA.RAM
    }mb-disk${DEPLOY_CONFIG.LAMBDA.DISK}mb-${DEPLOY_CONFIG.LAMBDA.TIMEOUT}sec`

/** 
 * @note 배포할 `AWS` region 목록
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

/**
 * @note random한 `AWS` region을 가져옵니다
 */
const getRandomAWSRegion = () => {
    const regions = getAWSRegions()
    return regions[Math.floor(Math.random() * regions.length)]
}

/**
 * @note `.env`에 저장된 `AWS` 계정의 갯수를 가져옵니다
 */
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

/**
 * @note `.env`에 저장된 임의의 `AWS` 계정의 순서를 가져옵니다
 */
const getRandomAwsAccount = () =>
    Math.ceil(Math.random() * getAWSAccountCount())

/**
 * @note `remotion`을 위한 `AWS` 환경 변수를 설정합니다
 * ```bash
 * AWS_KEY_1=유저1
 * AWS_SECRET_1=유저1_배포_키
 * # 변환 결과
 * REMOTION_AWS_ACCESS_KEY_ID=유저1
 * REMOTION_AWS_SECRET_ACCESS_KEY=유저1_배포_키
 * ```
 * @param {number} accountCount `getAWSAccountCount()`를 인자로 받습니다
 */
const setEnvForRemotionAWSDeploy = (accountCount) => {
    process.env.REMOTION_AWS_ACCESS_KEY_ID =
        process.env[`AWS_KEY_${accountCount}`]
    process.env.REMOTION_AWS_SECRET_ACCESS_KEY =
        process.env[`AWS_SECRET_${accountCount}`]
}

export {
    setEnvForRemotionAWSDeploy,
    getDeployedLambdaFunctionName,
    getAWSAccountCount,
    getAWSRegions,
    getRandomAwsAccount,
    getRandomAWSRegion,
}
