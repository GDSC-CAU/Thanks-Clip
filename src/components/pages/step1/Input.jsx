import { useState } from "react"

const titleStyle = "text-xl text-black font-bold mb-4"
const inputStyle = "border-b border-neutral-400"
const divStyle = "flex flex-col my-20"

const Input = ({ initialValue }) => {
    const [sender, setSender] = useState(initialValue)
    const [recipient, setRecipient] = useState(initialValue)

    const onSender = (e) => {
        setSender(e.target.value)
    }

    const onRecipent = (e) => {
        setRecipient(e.target.value)
    }

    return (
        <div>
            <div className={divStyle}>
                <label className={titleStyle}>From</label>
                <input
                    className={inputStyle}
                    type="text"
                    maxLength={10}
                    value={sender}
                    onChange={onSender}
                />
            </div>
            <div className={divStyle}>
                <label className={titleStyle}>Thanks to!</label>
                <input
                    className={inputStyle}
                    type="text"
                    maxLength={10}
                    value={recipient}
                    onChange={onRecipent}
                />
            </div>
        </div>
    )
}

export { Input }
