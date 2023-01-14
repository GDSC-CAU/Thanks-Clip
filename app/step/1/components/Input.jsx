const Input = ({ value, onChange }) => (
    <input
        className="border-b-[1.5px] border-neutral-300 outline-none focus:border-neutral-500 transition pb-1 [appearance:none] [-moz-appearance:none] [-webkit-appearance:none] rounded-none [-webkit-border-radius:0] [-moz-border-radius:0]"
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
    />
)

export { Input }
