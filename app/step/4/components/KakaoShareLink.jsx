"use client"
import { useCallback, useEffect } from "react"

const KakaoShareLink = ({ children, urlParams, onClick = null, className }) => {
    const openKakaoShare = useCallback(() => {
        const kakao = window.Kakao
        if (kakao) {
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
        if (!window.Kakao) {
            const script = document.createElement("script")
            script.src = "https://developers.kakao.com/sdk/js/kakao.js"
            script.async = true
            document.body.appendChild(script)
        }
    }, [])

    useEffect(() => {
        openKakaoShare()
    }, [openKakaoShare])

    return (
        <div
            id="kakaotalk-sharing-btn"
            onClick={() => {
                if (onClick !== null) onClick()
                openKakaoShare()
            }}
            className={className}
        >
            {children}
        </div>
    )
}

export { KakaoShareLink }
