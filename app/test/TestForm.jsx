"use client"
import { useEffect } from "react"
import { useAtomValue } from "jotai"
import { store } from "../../atoms"
import { ShareKakao } from "./ShareKakao"

const TestForm = () => {
    const letter = useAtomValue(store.letter)
    const to = letter.to
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://developers.kakao.com/sdk/js/kakao.js"
        script.async = true
        document.body.appendChild(script)
        return () => document.body.removeChild(script)
    }, [])
    return (
        <>
            <ShareKakao to={to} />
        </>
    )
}

export { TestForm }
