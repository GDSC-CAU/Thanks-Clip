"use client"
import { useState } from "react"
import { EditorToolBar } from "./EditorToolBar"
import { ToolBar } from "./ToolBar"

const LetterEditorLayout = (props) => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleClickOptions = (option) => {
        setSelectedOption(option)
    }

    return (
        <div className="flex flex-col h-96 w-full relative">
            {props.children}
            <ToolBar
                handleClickOptions={handleClickOptions}
                selectedOption={selectedOption}
            ></ToolBar>
            <EditorToolBar selectedOption={selectedOption}></EditorToolBar>
        </div>
    )
}

export { LetterEditorLayout }
