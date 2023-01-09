/** 
 * 배포 설정 상수
 * @type {{
    DURATION: number;
    RAM: number;
    DISK: number;
    TIMEOUT: number;
    DEPLOY_REGION: "ap-northeast-2";
    SITE_NAME: string;
    VIDEO_ENTRY_POINT: string;
    VIDEO_COMPOSITION_ID: "thanks-clip";
}} 
*/
const CONFIG = {
    DURATION: 1100,
    RAM: 2048,
    DISK: 2048,
    TIMEOUT: 240,
    VIDEO_COMPOSITION_ID: "thanks-clip",
    DEPLOY_REGION: "ap-northeast-2",
    SITE_NAME: "thanks-clip",
    VIDEO_ENTRY_POINT: "src/video/index.jsx",
}

export { CONFIG }
