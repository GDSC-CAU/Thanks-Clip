import { cookies } from "next/headers"
import { encodeVideo } from "../../../pages/api/rendering.js"
import { ClipPreview } from "./components/ClipPreview.jsx"
// import { KakaoShareLink } from "./components/KakaoShareLink.jsx"
import { LetterButton } from "./components/LetterButton"
import { LetterToName } from "./components/LetterToName"

export default async function Step4() {
    const nextCookies = cookies()
    const videoProps = JSON.parse(
        nextCookies.get("props")?.value ?? JSON.stringify({ name: "danpacho" })
    )

    const encode = await encodeVideo(videoProps)
    // eslint-disable-next-line no-unused-vars
    const { bucketName, region, renderId } = encode
    return (
        <div className="h-full flex flex-col justify-between">
            <LetterToName />
            <div className="h-full flex-1">
                <ClipPreview />
            </div>
            <LetterButton />
        </div>
    )
}
