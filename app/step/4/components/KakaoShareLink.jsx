"use client"
import { useCallback, useEffect } from "react"

const KakaoShareLink = ({ children, urlParams, onClick = null, className }) => {
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
                kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
            }
            kakao.Share.createCustomButton({
                container: "#kakaotalk-sharing-btn",
                templateId: 88654,
                templateArgs: {
                    to: urlParams.to,
                    from: urlParams.from,
                    path: `download?from=${urlParams.from}&to=${urlParams.to}&region=${urlParams.region}&bucketName=${urlParams.bucketName}&renderId=${urlParams.renderId}`,
                },
            })
        }
    }, [urlParams])

    useEffect(() => {
        kakaoButton()
    }, [kakaoButton])

    return (
        <div
            id="kakaotalk-sharing-btn"
            onClick={() => {
                if (onClick !== null) onClick()
                kakaoButton()
            }}
            className={className}
        >
            {children}
        </div>
    )
}

export { KakaoShareLink }
