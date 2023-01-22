import { DownloadClientPage } from "./components/DownloadClient"

/**@typedef {{account: number; renderId: string | null; bucketName: string | null; region: string | null; from: string, to: string} DownloadURLParams} */
/**
 * @param {{params: any, searchParams: DownloadURLParams}} props
 */
export default function DownloadVideo() {
    return (
        <main className="flex flex-col min-w-[16rem] w-full max-w-[30rem] h-full min-h-screen mx-auto px-4 pt-3 pb-10 bg-white shadow-md">
            <DownloadClientPage />
        </main>
    )
}
