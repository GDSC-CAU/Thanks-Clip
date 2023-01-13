"use client"

import { useEffect, useState } from "react"

const useMounted = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return { isMounted }
}

const Canvas = ({ children, size }) => {
    const { isMounted } = useMounted()

    return (
        <div
            style={{
                width: size,
                height: size,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backgroundColor: "transparent",
                transition: "ease opacity 300ms",
                opacity: isMounted ? 100 : 0,
            }}
        >
            {children}
        </div>
    )
}

export { Canvas }
