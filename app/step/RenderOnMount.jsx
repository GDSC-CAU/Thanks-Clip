"use client"

import { useEffect, useState } from "react"

/**
 * 카카오톡 셋업을 미리 시작
 */
const useSetupKakao = () => {
    useEffect(() => {
        const kakao = window.Kakao
        if (kakao) {
            if (!kakao.isInitialized()) {
                kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
            }
        }
    }, [])
}

const useMounted = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return { isMounted }
}

const RenderOnMount = ({ children, ...props }) => {
    useSetupKakao()
    const { isMounted } = useMounted()

    if (isMounted === false) {
        return null
    }

    return (
        <main
            {...props}
            className="flex flex-col min-w-[16rem] w-full max-w-[30rem] h-full min-h-screen mx-auto sm:w-[30rem] px-4 pt-3 pb-10 bg-white shadow"
        >
            {children}
        </main>
    )
}

export { RenderOnMount, useMounted }
