import { cookies } from "next/headers"
import { encodeVideo } from "../../../pages/api/rendering.js"
import { LetterButton } from "./components/LetterButton"
import { LetterToName } from "./components/LetterToName"
import { KakaoShareLink } from "./components/KakaoShareLink.jsx"

export default function Step4() {
    const nextCookies = cookies()
    const videoProps = JSON.parse(
        nextCookies.get("props")?.value ?? JSON.stringify({ name: "danpacho" })
    )

    const encode = await encodeVideo(videoProps)

    return (
        <>
            <LetterToName />
            <LetterButton />
        </>
    )
}
