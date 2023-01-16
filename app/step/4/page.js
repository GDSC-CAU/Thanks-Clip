import { cookies } from "next/headers"
import { encodeVideo } from "../../../pages/api/rendering.js"
import { ClipPreview } from "./components/ClipPreview.jsx"
// import { KakaoShareLink } from "./components/KakaoShareLink.jsx"
import { LetterButton } from "./components/LetterButton"
import { LetterToName } from "./components/LetterToName"

export default async function Step4() {
    function resolveAfter10Seconds() {
        // eslint-disable-next-line no-undef
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("resolved")
            }, 10000)
        })
    }

    // eslint-disable-next-line no-unused-vars
    const result = await resolveAfter10Seconds()

    const nextCookies = cookies()
    const videoProps = JSON.parse(
        nextCookies.get("props")?.value ?? JSON.stringify({ name: "danpacho" })
    )

    const encode = await encodeVideo(videoProps)
    // eslint-disable-next-line no-unused-vars
    const { bucketName, region, renderId } = encode
    return (
        <>
            <LetterToName />
            <ClipPreview />
            <LetterButton />
        </>
    )
}
