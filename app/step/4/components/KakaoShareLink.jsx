"use client"
import { useCallback, useEffect } from "react"
import Script from "next/script"

const KakaoShareLink = ({ children, urlParams, onClick = null, className }) => {
    const openKakaoShare = useCallback(() => {
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
        openKakaoShare()
    }, [openKakaoShare])

    return (
        <>
            <Script
                async
                beforeInteractive
                src="https://developers.kakao.com/sdk/js/kakao.js"
            />
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
        </>
    )
}

export { KakaoShareLink }
