/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"
import { Button } from "./common/Button"

/**
 * @param {{ type: "cute" | "sans" | "hand", text: string }} svgParams
 * @returns {{ svg: null | string }}
 */
const useSVG = ({ text, type }) => {
    const [svg, setSVG] = useState(null)

    useEffect(() => {
        const fetchSVG = async ({ text, type }) => {
            try {
                const satoriResponse = await (
                    await fetch(`/api/svg?type=${type}&text=${text}`)
                ).json()

                console.log(satoriResponse.svgString)
                setSVG(satoriResponse.svgString)
            } catch (e) {
                setSVG(null)
                console.log(e)
            }
        }

        fetchSVG({
            text,
            type,
        })
    }, [text, type])

    return {
        svg,
    }
}

const SvgTest = () => {
    const [name, setName] = useState("JUNE")
    const [type, setType] = useState("cute")
    const { svg } = useSVG({ text: name, type })

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            {svg === null ? (
                "Loading..."
            ) : (
                <img
                    src={`data:image/svg+xml;utf8,${svg ?? ""}`}
                    alt="svgString"
                    height={20}
                    style={{
                        height: 20,
                    }}
                />
            )}
            <div className="flex flex-row w-full justify-evenly gap-4">
                {["cute", "hand", "sans"].map((type) => (
                    <Button key={type} onClick={() => setType(type)}>
                        {type}
                    </Button>
                ))}
            </div>
            <></>
        </>
    )
}

export { SvgTest }
