import { Button } from "../common/Button"

/**
 * @param {{params: any, searchParams: { region: string, bucketName: string, from: string }}} param0
 * @returns
 */
export default function DownloadVideo({ searchParams }) {
    const downloadUrl = `${searchParams}`
    const isInvalid =
        !searchParams.bucketName || !searchParams.from || !searchParams.region
    if (isInvalid) {
        return <>오류가 발생했어요ㅠㅠ</>
    }
    return (
        <>
            <a href={downloadUrl} download={"thanks clip"}>
                <Button>다운로드</Button>
            </a>
        </>
    )
}
