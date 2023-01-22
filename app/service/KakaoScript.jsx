import Script from "next/script"

const KakaoScript = () => (
    <Script
        strategy="lazyOnload"
        src="https://developers.kakao.com/sdk/js/kakao.js"
    />
)

export { KakaoScript }
