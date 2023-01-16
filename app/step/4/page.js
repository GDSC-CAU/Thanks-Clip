import { cookies } from "next/headers"
import { COOKIE_KEY } from "../../../constant/cookie.js"
import {
    encodeVideo,
    transformVideoProps,
} from "../../../pages/api/rendering.js"
import { Download } from "./components/Download.jsx"
import { LetterButton } from "./components/LetterButton"
import { LetterToName } from "./components/LetterToName"

export default async function Step4() {
    const nextCookies = cookies()

    /**@type {import("../../../atoms/letter".Letter)} */
    const videoProps = JSON.parse(nextCookies.get(COOKIE_KEY)?.value)
    const transformedVideoProps = await transformVideoProps(videoProps)

    const encode = await encodeVideo(transformedVideoProps)

    return (
        <>
            <LetterToName />
            <LetterButton urlParams={{ ...encode, to: videoProps.to }} />
            <Download
                encode={encode}
                transformedVideoProps={transformedVideoProps}
            />
        </>
    )
}
