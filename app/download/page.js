import { Button } from "../common/Button"

/**
 * @param {{params: any, searchParams: {renderId: string | null; bucketName: string | null; region: string | null; to: string}}} param0
 */
export default function DownloadVideo({ searchParams }) {
    const isInvalid =
        !searchParams.bucketName ||
        !searchParams.to ||
        !searchParams.region ||
        !searchParams.renderId

    if (isInvalid) return <>오류가 발생했어요</>

    const { bucketName, region, renderId } = searchParams
    const downloadUrl = `https://s3.${region}.amazonaws.com/${bucketName}/renders/${renderId}/out.mp4`

    return (
        <>
            <a href={downloadUrl} download={"thanks clip"}>
                <Button>다운로드</Button>
            </a>
        </>
    )
}
