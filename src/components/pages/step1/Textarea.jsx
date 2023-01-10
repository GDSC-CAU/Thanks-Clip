import { useState } from "react"

const titleStyle = "text-xl text-black font-bold mb-4"
const textareaStyle = "border border-neutral-400"
const divStyle = "flex flex-col my-20"

const Textarea = ({ initialValue }) => {
    const [textarea, setTextarea] = useState(initialValue)

    const onTextarea = (e) => {
        setTextarea(e.target.value)
    }

    return (
        <div>
            <div className={divStyle}>
                <label className={titleStyle}>From</label>
                <textarea
                    className={textareaStyle}
                    maxLength={50}
                    rows="8"
                    cols="5"
                    onChange={onTextarea}
                >
                    {textarea}
                </textarea>
            </div>
        </div>
    )
}

export { Textarea }
