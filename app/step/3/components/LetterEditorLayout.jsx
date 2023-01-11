"use client"
import { useState } from "react"
import { EditorToolBar } from "./EditorToolBar"
import { ToolBar } from "./ToolBar"

const LetterEditorLayout = (props) => {
    const [select, setSelect] = useState("")

    const handleClickOptions = (option) => {
        setSelect(option)
    }

    return (
        // height -> f-fit
        <div className="bg-red-300 flex flex-col h-96 w-full relative">
            {props.children}
            <ToolBar
                handleClickOptions={handleClickOptions}
                selectedOption={select}
            ></ToolBar>
            <EditorToolBar selectedOption={select}></EditorToolBar>
        </div>
    )
}

export { LetterEditorLayout }
