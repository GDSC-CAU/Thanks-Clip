"use client"

import { useCallback, useEffect, useState } from "react"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { Button } from "../../../common/Button"
/**@typedef {Awaited<import("../../../../api/video").RenderingProgress>} Progress*/

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
 * @param {{ encode: {renderId: string | null; bucketName: string | null; region: string | null;} }} downloadProps
 * @returns
 */
const Download = ({ encode, transformedVideoProps }) => {
    console.log(transformedVideoProps, encode)
    /**@type {[Progress, Dispatch<SetStateAction<Progress>>]} */
    const [progress, setProgress] = useState({
        type: "progress",
        downloadUrl: null,
        errorMessage: null,
        outputSize: null,
    })

    const progressRequest = useCallback(() => {
        const getVideoProgress = async () => {
            const res = await fetch("/api/rendering", {
                method: "POST",
                body: JSON.stringify(encode),
            })

            /**@type {Progress} */
            const progress = await res.json()
            setProgress(progress)
        }

        const cleanupProgressRequest = setTimeout(() => {
            getVideoProgress()
        }, 500)

        return cleanupProgressRequest
    }, [encode, setProgress])

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
                    <Button color="red">
                        다운로드 {byteToSize({ byte: progress.outputSize })}
                    </Button>
                </a>
            )}
            {progress.type === "progress" && (
                <Button disabled color="gray">
                    <ArrowPathIcon className="animate-spin h-8 w-8" />
                </Button>
            )}
            {progress.type === "error" && <Button color="white">에러</Button>}
        </>
    )
}

export { Download }
