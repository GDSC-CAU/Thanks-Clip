const Input = ({ value, onChange }) => (
    <input
        className="border-b-[1.5px] border-neutral-300 outline-0 focus:border-neutral-500 transition pb-1"
        type="text"
        maxLength={10}
        value={value}
        onChange={onChange}
    />
)

export { Input }
