"use client"

const inputStyle =
    "border-b-2 border-neutral-300 outline-0 focus:border-neutral-500"

const Input = ({ value, onChange }) => {
    return (
        <input
            className={inputStyle}
            type="text"
            maxLength={10}
            value={value}
            onChange={onChange}
        />
    )
}

export { Input }
