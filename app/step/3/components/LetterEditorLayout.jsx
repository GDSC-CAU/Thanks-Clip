import { useState } from "react"
import { EditorToolBar } from "./EditorToolBar"
import { ToolBar } from "./ToolBar"

const LetterEditorLayout = (props) => {
    const [select, setSelect] = useState("")

    const handleClickOptions = (option) => {
        setSelect(option)
    }

    return (
        <div className="bg-red-300 flex flex-col w-full h-fit relative">
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
