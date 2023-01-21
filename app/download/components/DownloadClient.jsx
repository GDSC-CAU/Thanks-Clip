"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "../../common/Button"
import { Confetti } from "./Confetti"
import { DownloadTitle } from "./DownloadTitle"
import { Envelop } from "./Envelope"

const DownloadClientPage = () => {
    const searchParams = useSearchParams()

    const to = searchParams.get("to")
    const from = searchParams.get("from")
    const bucketName = searchParams.get("bucketName")
    const renderId = searchParams.get("renderId")
    const region = searchParams.get("region")

    const isValid =
        ((searchParams.bucketName !== "") | null | undefined &&
            (searchParams.region !== "") | null | undefined &&
            (searchParams.renderId !== "") | null | undefined) === 1

    const videoDownloadURL = `https://s3.${region}.amazonaws.com/${bucketName}/renders/${renderId}/out.mp4`

    return (
        <>
            {isValid && <Confetti />}

            <div className="h-full flex flex-col justify-between">
                <DownloadTitle from={from} />

                <div className="w-81 h-81 relative">
                    <Envelop />
                </div>

                <div className="mt-auto mb-5">
                    {isValid ? (
                        <a href={videoDownloadURL} download={"thanks clip"}>
                            <Button className="mb-5 z-50">
                                {to}님의 Clip 열어보기
                            </Button>
                        </a>
                    ) : (
                        <Button color="red" className="mb-5 z-50">
                            지금은 Clip을 열 수 없어요 😭
                        </Button>
                    )}

                    <Link href="/step/1">
                        <Button className="bg-inherit text-gray-800 border-gray-800 border-solid border z-50">
                            저도 만들어볼래요 🙌
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export { DownloadClientPage }
