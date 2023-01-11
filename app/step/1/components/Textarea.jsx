"use client"

const Textarea = ({ onChange, children }) => {
    return (
        <textarea
            className="border-2 border-neutral-300 rounded-xl p-1 outline-0 focus:border-neutral-500"
            maxLength={100}
            rows="15"
            cols="5"
            onChange={onChange}
        >
            {children}
        </textarea>
    )
}

export { Textarea }
