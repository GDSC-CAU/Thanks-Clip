"use client"

import { useRef, useState } from "react"
import { Canvas } from "./Canvas"
import { EditorToolBar, EditorToolBarSelector } from "./Editor"

const Letter = () => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleClickOptions = (option) => {
        setSelectedOption(option)
    }

    const letterContainerRef = useRef()

    return (
        <div
            ref={letterContainerRef}
            className="flex items-center justify-center h-fit w-full relative"
        >
            <Canvas containerRef={letterContainerRef}>
                이곳에 그려봅시다!
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
