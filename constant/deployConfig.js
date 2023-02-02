/**
 * @note `AWS lambda` 배포 옵션
 * @link [`remotion` 배포 옵션 필독 ](https://www.remotion.dev/docs/lambda/checklist)
 */
const DEPLOY_CONFIG = {
    // lambda 함수 옵션
    LAMBDA: {
        /**
         * 가상 머신 ram 크기, 커질수록 비용 증가
         */
        RAM: 2048,
        /**
         * 가상 머신 disk(hard drive) 크기, 커질수록 비용 증가
         */
        DISK: 512,
        TIMEOUT: 240,
    },

    BUCKET: {
        /**
         * s3 bucketName
         */
        SITE_NAME: "thanks-clip",
        /**
         * remotion 접근 root point
         */
        VIDEO_ENTRY_POINT: "video/index.jsx",
    },

    /**
     * remotion video render root
     */
    VIDEO_COMPOSITION_ID: "thanks-clip",

    /**
     * frame당 lambda 함수 갯수, 커질수록 비용 증가
     */
    FRAMES_PER_LAMBDA: 15,

    /**
     * resolution scale 비율, 커질수록 비용 증가
     */
    RESOLUTION_SCALE: 1.5,
}

export { DEPLOY_CONFIG }
