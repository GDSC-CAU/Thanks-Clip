"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "../../common/Button"
/**@typedef {Awaited<import("../../../pages/api/rendering").RenderingProgress>} Progress*/

const byteToSize = ({ byte, type = "kb", ceilOn = 1 }) => {
    const conversionFactors = {
        kb: 1024,
        mb: 1024 ** 2,
    }
    const ceilUnit = 10 ** ceilOn
    const conversion = conversionFactors[type] || 1
    const rounded = (val) => Math.ceil(val * ceilUnit) / ceilUnit

    return `${rounded(byte / conversion)}${type}`
}

/**
 * @param {{to: string; account: number; renderId: string | null; bucketName: string | null; region: string | null}} renderInfo
 */
const Download = ({ to, bucketName, region, renderId, account }) => {
    /**@type {[Progress, Dispatch<SetStateAction<Progress>>]} */
    const [progress, setProgress] = useState({
        type: "progress",
        downloadUrl: null,
        errorMessage: null,
        outputSize: null,
    })

    const progressRequest = useCallback(() => {
        const getVideoProgress = async () => {
            const progressRes = await fetch(
                `/api/rendering?renderId=${renderId}&bucketName=${bucketName}&region=${region}&account=${String(
                    account
                )}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                    method: "GET",
                }
            )
            const progress = await progressRes.json()
            setProgress(progress)
        }

        const cleanupProgressRequest = setTimeout(() => {
            getVideoProgress()
        }, 500)

        return cleanupProgressRequest
    }, [account, region, renderId, bucketName, setProgress])

    useEffect(() => {
        /**@type {NodeJS.Timeout} */
        let cleanupRequest
        if (progress.type === "progress") {
            cleanupRequest = progressRequest()
        }
        if (progress.type === "error") {
            cleanupRequest = null
        }
        return () => clearTimeout(cleanupRequest)
    }, [progress, progress.type, progressRequest])

    return (
        <>
            {progress.type === "success" && (
                <a href={progress.downloadUrl} download={"thanks clip"}>
                    <Button color="red" className="mb-5 z-50 gap-2">
                        {to}님의 Clip 열어보기
                        <p className="text-xs font-normal">
                            {byteToSize({ byte: progress.outputSize })}
                        </p>
                    </Button>
                </a>
            )}
            {progress.type === "progress" && (
                <Button
                    disabled
                    color="gray"
                    className="mb-5 z-50 animate-pulse"
                >
                    Clip을 만들고 있어요!
                </Button>
            )}
            {progress.type === "error" && (
                <Button color="red" className="mb-5 z-50">
                    지금은 Clip을 열 수 없어요 😭
                </Button>
            )}
        </>
    )
}

export { Download }
