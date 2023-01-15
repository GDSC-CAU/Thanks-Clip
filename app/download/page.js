import Link from "next/link"
import { Button } from "../common/Button"
import style from "../download.module.css"
import { DownloadTitle } from "./DownloadTitle"

/**
 * @param {{params: any, searchParams: { region: string, bucketName: string, from: string }}} param0
 * @returns
 */

const Envelop = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 283.5"
        className={style.envelop}
        {...props}
    >
        <path
            d="M246,224H38.7c-3.8,0-6.9-3.1-6.9-6.9V73.3c0-3.8,3.1-6.9,6.9-6.9H246c3.8,0,6.9,3.1,6.9,6.9v143.8
            C252.9,220.9,249.8,224,246,224z"
            className={style.st0}
        />
        <path
            d="M147.1,141.9c-2.8-2.2-6.7-2.2-9.5,0L34.1,222.2c1.2,1.1,2.9,1.8,4.6,1.8H246c1.8,0,3.4-0.7,4.6-1.8
            L147.1,141.9z"
            className={style.st1}
        />
        <path
            d="M137.6,148.5c2.8,2.2,6.7,2.2,9.5,0l103.5-80.3c-1.2-1.1-2.9-1.8-4.6-1.8H38.7c-1.8,0-3.4,0.7-4.6,1.8
            L137.6,148.5z"
            className={style.st2}
        />
    </svg>
)

export default function DownloadVideo({ searchParams }) {
    const downloadUrl = `${searchParams}`
    const isInvalid =
        !searchParams.bucketName || !searchParams.from || !searchParams.region
    if (isInvalid) {
        return (
            <main className="flex flex-col w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white ">
                <div className="h-full flex flex-col justify-between">
                    <DownloadTitle />
                    <div className="w-81 h-81 relative">
                        <Envelop />
                    </div>
                    <div className="mt-auto mb-5">
                        <a href={downloadUrl} download={"thanks clip"}>
                            <Button className="mb-5">Clip 열어보기</Button>
                        </a>
                        <Link href="/step1/">
                            <Button className="bg-inherit text-gray-800 border-gray-800 border-solid border">
                                저도 만들어볼래요 🙌
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <>
            <a href={downloadUrl} download={"thanks clip"}>
                <Button>다운로드</Button>
            </a>
        </>
    )
}
