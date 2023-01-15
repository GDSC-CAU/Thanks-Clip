import { useEffect } from "react"
const ShareKakao = () => {
    useEffect(() => {
        kakaoButton()
    }, [])

    const kakaoButton = ({ to }) => {
        if (window.Kakao) {
            const kakao = window.Kakao
            if (!kakao.isInitialized()) {
                kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY) // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
            }
            // createCustomButton()
            kakao.Share.createCustomButton({
                container: "#kakaotalk-sharing-btn",
                templateId: 88654,
                templateArgs: {
                    to_user: { to },
                },
            })
        }
    }
    return (
        <button id="kakaotalk-sharing-btn" onClick={kakaoButton}>
            KakaoShare
        </button>
    )
}

export { ShareKakao }
