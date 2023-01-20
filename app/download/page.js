import Link from "next/link"
import { Button } from "../common/Button"
import { Confetti } from "./components/Confetti"
import { DownloadTitle } from "./components/DownloadTitle"
import { Envelop } from "./components/Envelope"

/**
 * @param {{params: any, searchParams: { region: string, bucketName: string, from: string }}} param0
 * @returns
 */
export default function DownloadVideo({ searchParams }) {
    const downloadUrl = `${searchParams}`
    // const isInvalid =
    //     !searchParams.bucketName || !searchParams.from || !searchParams.region
    const isInvalid = false
    if (isInvalid) {
        return (
            <main className="flex flex-col w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white ">
                <div className="h-full flex flex-col justify-between">
                    <DownloadTitle from={searchParams.from} />
                    <div className="w-81 h-81 relative">
                        <Envelop />
                    </div>
                    <div className="mt-auto mb-5">
                        <Button color="red">
                            지금은 편지를 열 수 없어요 😭
                        </Button>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main className="flex flex-col w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white ">
            <Confetti />
            <div className="h-full flex flex-col justify-between">
                <DownloadTitle />
                <div className="w-81 h-81 relative">
                    <Envelop />
                </div>
                <div className="mt-auto mb-5">
                    <a href={downloadUrl} download={"thanks clip"}>
                        <Button className="mb-5 z-50">Clip 열어보기</Button>
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
