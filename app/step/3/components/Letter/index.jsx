"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas } from "./Canvas"
import { EditorToolBar, EditorToolBarSelector } from "./Editor"
import { StickerManager } from "./Editor/Stickers/StickerManager"
import { LetterShape } from "./LetterShape"
import { LetterText } from "./LetterText"

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
/**@typedef {"type" | "color" | "font" | "sticker" | "none"} SelectedOption */
/**@type {SelectedOption} */
const value = "none"
const Letter = () => {
    const [selectedOption, setSelectedOption] = useState(value)

    const handleClickOptions = (option) => {
        setSelectedOption(option)
    }

    const letterContainerRef = useRef(null)
    const { size } = useCanvasSize({ containerRef: letterContainerRef })
    return (
        <div
            ref={letterContainerRef}
            className="flex items-center justify-center h-fit w-full relative"
        >
            <Canvas size={size}>
                <LetterShape>
                    <LetterText />
                </LetterShape>

                <StickerManager
                    size={size}
                    active={selectedOption === "sticker"}
                    stickerSize={24}
                    clickActiveAreaRatio={1.5}
                />
            </Canvas>

            <EditorToolBarSelector
                handleClickOptions={handleClickOptions}
                selectedOption={selectedOption}
            />

            <EditorToolBar selectedOption={selectedOption} />
        </div>
    )
}

export { Letter }
