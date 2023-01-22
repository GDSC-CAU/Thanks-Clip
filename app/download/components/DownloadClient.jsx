"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "../../common/Button"
import { Confetti } from "./Confetti"
import { Download } from "./Download"
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
    console.log(videoDownloadURL)
    return (
        <>
            {isValid && <Confetti />}

            <div className="h-full flex flex-col justify-between">
                <DownloadTitle from={from} />

                <div className="flex justify-center w-81 h-81 relative">
                    <Envelop />
                </div>

                <div className="mt-auto mb-5">
                    {isValid ? (
                        <Download
                            to={to}
                            region={region}
                            renderId={renderId}
                            bucketName={bucketName}
                        />
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
