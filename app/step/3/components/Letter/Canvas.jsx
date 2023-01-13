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
            }}
            className={`${
                isMounted ? "opacity-100" : "opacity-0"
            } relative bg-transparent transition duration-300`}
        >
            {children}
        </div>
    )
}

export { Canvas }
