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
    // 몇 프레임당, 람다 함수 1개 호출할거야? -> 적을수록 고성능 / 동시성 증가
    FRAMES_PER_LAMBDA: number,
}} 
*/
const DEPLOY_CONFIG = {
    DURATION: 1100,
    RAM: 2048,
    DISK: 512,
    TIMEOUT: 240,
    SITE_NAME: "thanks-clip",
    VIDEO_COMPOSITION_ID: "thanks-clip",
    VIDEO_ENTRY_POINT: "video/index.jsx",
    FRAMES_PER_LAMBDA: 10,
}
//!TODO: 배포전 체크리스트 확인 https://www.remotion.dev/docs/lambda/checklist

export { DEPLOY_CONFIG }
