/** 
 * 배포 설정 상수
 * @type {{
    DURATION: number;
    RAM: number;
    DISK: number;
    TIMEOUT: number;
    SITE_NAME: "thanks-clip";
    VIDEO_ENTRY_POINT: "video/index.jsx";
    VIDEO_COMPOSITION_ID: "thanks-clip";
}} 
*/
const DEPLOY_CONFIG = {
    DURATION: 1100,
    RAM: 2048, //!TODO: 배포전 체크리스트 확인 https://www.remotion.dev/docs/lambda/checklist
    DISK: 2048,
    TIMEOUT: 240,
    SITE_NAME: "thanks-clip",
    VIDEO_COMPOSITION_ID: "thanks-clip",
    VIDEO_ENTRY_POINT: "video/index.jsx",
}

export { DEPLOY_CONFIG }
