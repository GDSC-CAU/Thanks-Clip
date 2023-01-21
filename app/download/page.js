import { DownloadClientPage } from "./components/DownloadClient"

/**@typedef {{renderId: string | null; bucketName: string | null; region: string | null; from: string, to: string} DownloadURLParams} */
/**
 * @param {{params: any, searchParams: DownloadURLParams}} props
 */
export default function DownloadVideo() {
    return (
        <main className="flex flex-col min-w-[22rem] w-full max-w-[30rem] h-screen min-h-screen mx-auto px-3 py-3 bg-white shadow-md">
            <DownloadClientPage />
        </main>
    )
}
