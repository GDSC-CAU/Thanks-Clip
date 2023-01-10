import { cookies } from "next/headers"
import { encodeVideo } from "../../../pages/api/rendering.js"
import { Download } from "./components/Download.jsx"

export default async function Step4() {
    const nextCookies = cookies()
    const videoProps = JSON.parse(
        nextCookies.get("props")?.value ?? JSON.stringify({ name: "danpacho" })
    )

    const encode = await encodeVideo(videoProps)

    return (
        <div className="h-full flex flex-col justify-between">
            <h1 className="text-3xl font-bold">Thanks Clip!</h1>

            <Download encode={encode} />
        </div>
    )
}
