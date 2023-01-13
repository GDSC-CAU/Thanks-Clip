/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"
import { Button } from "./common/Button"

/**
 * @param {{ type: "cute" | "sans" | "hand", name: string }} svgParams
 * @returns {{ svg: null | string }}
 */
const useSVG = ({ name, type }) => {
    const [svg, setSVG] = useState(null)

    useEffect(() => {
        const fetchSVG = async ({ name, type }) => {
            try {
                const res = await fetch(`/api/svg?type=${type}&name=${name}`)
                const resJSON = await res.json()
                setSVG(resJSON.svg)
            } catch (e) {
                setSVG(null)
                console.log(e)
            }
        }

        fetchSVG({
            name,
            type,
        })
    }, [name, type])

    return {
        svg,
    }
}

const SvgTest = () => {
    const [name, setName] = useState("JUNE")
    const [type, setType] = useState("cute")
    const { svg } = useSVG({ name, type })
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            {svg === null ? (
                "Loading..."
            ) : (
                <img
                    src={`data:image/svg+xml;utf8,${svg ?? ""}`}
                    alt="svgString"
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
