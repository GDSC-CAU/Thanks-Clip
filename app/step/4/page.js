import { cookies } from "next/headers"
import { encodeVideo } from "../../../pages/api/rendering.js"
import { Button } from "../../common/Button.jsx"
import { Download } from "./components/Download.jsx"
import { KakaoShareLink } from "./components/KakaoShareLink.jsx"

export default async function Step4() {
    const nextCookies = cookies()
    const videoProps = JSON.parse(
        nextCookies.get("props")?.value ?? JSON.stringify({ name: "danpacho" })
    )

    const encode = await encodeVideo(videoProps)
    return (
        <div className="h-full flex flex-col justify-between">
            <h1 className="text-3xl font-bold">Thanks Clip!</h1>
            <KakaoShareLink
                params={{ from: "은서", bucketName: "s3", region: "seoul" }}
            >
                <Button>카카오톡으로 Clip보내기</Button>
            </KakaoShareLink>
            <Download encode={encode} />
        </div>
    )
}
