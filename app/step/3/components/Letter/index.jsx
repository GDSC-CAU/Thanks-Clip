"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas } from "./Canvas"
import { EditorToolBar, EditorToolBarSelector } from "./Editor"

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
        size,
    }
}

const Letter = () => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleClickOptions = (option) => {
        setSelectedOption(option)
    }

    const letterContainerRef = useRef()
    const { size } = useCanvasSize({ containerRef: letterContainerRef })

    return (
        <div
            ref={letterContainerRef}
            className="flex items-center justify-center h-fit w-full relative"
        >
            <Canvas size={size}>이곳에 그려봅시다!</Canvas>

            <EditorToolBarSelector
                handleClickOptions={handleClickOptions}
                selectedOption={selectedOption}
            />

            <EditorToolBar selectedOption={selectedOption} />
        </div>
    )
}

export { Letter }
