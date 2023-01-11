"use client"

import { useState } from "react"
import { EditorToolBar } from "./EditorToolBar"
import { EditorToolBarSelector } from "./EditorToolBarSelector"

const LetterEditorLayout = (props) => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleClickOptions = (option) => {
        setSelectedOption(option)
    }

    return (
        <div className="flex flex-col h-fit w-full relative">
            {props.children}

            <EditorToolBarSelector
                handleClickOptions={handleClickOptions}
                selectedOption={selectedOption}
            />

            <EditorToolBar selectedOption={selectedOption} />
        </div>
    )
}

export { LetterEditorLayout }
