const Textarea = ({ onChange, value }) => (
    <textarea
        className="border-[1.25px] border-neutral-300 rounded-lg p-3 outline-none focus:border-neutral-500 resize-none transition [-webkit-appearance:none]"
        maxLength={100}
        rows="10"
        cols="5"
        onChange={onChange}
        value={value}
    />
)

export { Textarea }
