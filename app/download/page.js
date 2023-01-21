import Link from "next/link"
import { Button } from "../common/Button"
import { Confetti } from "./components/Confetti"
import { DownloadTitle } from "./components/DownloadTitle"
import { Envelop } from "./components/Envelope"

/**@typedef {{renderId: string | null; bucketName: string | null; region: string | null; from: string, to: string} DownloadURLParams} */
/**
 * @param {{params: any, searchParams: DownloadURLParams}} props
 */
export default function DownloadVideo({ searchParams }) {
    const isInvalid =
        !searchParams.to ||
        !searchParams.from ||
        !searchParams.bucketName ||
        !searchParams.region ||
        !searchParams.renderId

    const { bucketName, region, renderId, from, to } = searchParams
    const downloadUrl = `https://s3.${region}.amazonaws.com/${bucketName}/renders/${renderId}/out.mp4`

    if (isInvalid) {
        return (
            <main className="flex flex-col min-w-[22rem] w-full max-w-[30rem] h-screen min-h-screen mx-auto px-3 py-3 bg-white shadow-md">
                <div className="h-full flex flex-col justify-between">
                    <DownloadTitle from={from} />
                    <div className="w-81 h-81 relative">
                        <Envelop />
                    </div>
                    <div className="mt-auto mb-5">
                        <Button color="red">
                            지금은 Clip을 열 수 없어요 😭
                        </Button>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="flex flex-col min-w-[22rem] w-full max-w-[30rem] h-screen min-h-screen mx-auto px-3 py-3 bg-white shadow-md">
            <Confetti />
            <div className="h-full flex flex-col justify-between">
                <DownloadTitle from={from} />
                <div className="w-81 h-81 relative">
                    <Envelop />
                </div>
                <div className="mt-auto mb-5">
                    <a href={downloadUrl} download={"thanks clip"}>
                        <Button className="mb-5 z-50">
                            {to}님의 Clip 열어보기
                        </Button>
                    </a>
                    <Link href="/step1/">
                        <Button className="bg-inherit text-gray-800 border-gray-800 border-solid border z-50">
                            저도 만들어볼래요 🙌
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
