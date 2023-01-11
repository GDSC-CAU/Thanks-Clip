"use client"

import { useEffect, useState } from "react"

const useCanvasSize = ({ containerRef }) => {
    const [size, setSize] = useState(0)

    useEffect(() => {
        setSize(containerRef.current.offsetWidth)

        const resizeHandler = () => {
            setSize(containerRef.current.offsetWidth)
        }

        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [containerRef])

    return {
        size: `${size}px`,
    }
}

const useMounted = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return { isMounted }
}

const Canvas = ({ children, containerRef }) => {
    const { isMounted } = useMounted()
    const { size } = useCanvasSize({ containerRef })
    const canvasSize = {
        width: size,
        height: size,
    }

    return (
        <div
            style={canvasSize}
            className={`${
                isMounted ? "opacity-100" : "opacity-0"
            } relative bg-transparent transition duration-300`}
        >
            {children}
        </div>
    )
}

export { Canvas }
