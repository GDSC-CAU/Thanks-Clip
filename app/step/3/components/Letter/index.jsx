"use client"

import { useEffect, useRef, useState } from "react"
import { EditorToolBar, EditorToolBarSelector } from "./Editor"
import { LetterStickerManager } from "./Editor/Stickers/StickerManager"
import { LetterCanvas } from "./LetterCanvas"
import { LetterShape } from "./LetterShape"
import { LetterText } from "./LetterText"

const useCanvasSize = ({ containerRef }) => {
    const [size, setSize] = useState(0)

    useEffect(() => {
        setSize(containerRef.current.offsetWidth - 30)

        const resizeHandler = () => {
            setSize(containerRef.current.offsetWidth - 30)
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
            <LetterCanvas size={size}>
                <LetterShape>
                    <LetterText />
                </LetterShape>

                <LetterStickerManager
                    size={300}
                    stickerSize={24}
                    clickActiveAreaRatio={2}
                    active={selectedOption === "sticker"}
                />
            </LetterCanvas>

            <EditorToolBarSelector
                handleClickOptions={handleClickOptions}
                selectedOption={selectedOption}
            />

            <EditorToolBar selectedOption={selectedOption} />
        </div>
    )
}

export { Letter }
