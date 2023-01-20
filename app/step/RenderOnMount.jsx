"use client"

import { useEffect, useState } from "react"

const useMounted = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return { isMounted }
}

const RenderOnMount = ({ children, ...props }) => {
    const { isMounted } = useMounted()

    if (isMounted === false) {
        return null
    }

    return (
        <main
            {...props}
            className="flex flex-col w-full h-full min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-4 pt-3 pb-10 bg-white"
        >
            {children}
        </main>
    )
}

export { RenderOnMount, useMounted }
