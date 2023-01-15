"use client"

import { useMounted } from "../../../RenderOnMount"

const LetterCanvas = ({ children, size }) => {
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

export { LetterCanvas }
