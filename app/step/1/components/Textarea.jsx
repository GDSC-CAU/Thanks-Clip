const Textarea = ({ onChange, value }) => (
    <textarea
        className="border-[1.25px] border-neutral-300 rounded-lg p-3 outline-0 focus:border-neutral-500 select-none resize-none transition"
        maxLength={100}
        rows="10"
        cols="5"
        onChange={onChange}
        value={value}
    />
)

export { Textarea }
