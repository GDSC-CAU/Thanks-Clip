"use client"
import { useCallback, useEffect } from "react"
import { useAtomValue } from "jotai"
import { store } from "../../../../atoms"

const KakaoShareLink = ({ children, params }) => {
    const letter = useAtomValue(store.letter)
    const to = letter.to

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://developers.kakao.com/sdk/js/kakao.js"
        script.async = true
        document.body.appendChild(script)
        return () => document.body.removeChild(script)
    }, [])

    const kakaoButton = useCallback(() => {
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
                    to_user: `${to ? to : ""}`,
                    path: `download?region=${params.region}&bucketName=${params.bucketName}&from=${params.from}"`,
                },
            })
        }
    }, [params.bucketName, params.from, params.region, to])

    useEffect(() => {
        kakaoButton()
    }, [kakaoButton])

    return (
        <div id="kakaotalk-sharing-btn" onClick={kakaoButton}>
            {children}
        </div>
    )
}

export { KakaoShareLink }
