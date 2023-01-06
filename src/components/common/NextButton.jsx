const NextButton = ({ isDisable, text, onClick, color, size }) => {
    const commonCss = "px-7 py-3 text-lg border-solid border-2 rounded-full"
    const sizeType = size === "half" ? "w-1/2" : "w-full"
    const colorType = {
        red: "bg-red-400 text-white border-red-400",
        white: "bg-white text-gray-800 border-gray-800",
        gray: "bg-gray-300 text-white border-gray-300",
        disabled: "bg-gray-300 text-gray-600 border-gray-300",
    }

    return (
        <button
            disabled={isDisable}
            className={
                isDisable
                    ? `${commonCss} ${colorType.disabled} ${sizeType}`
                    : `${commonCss} ${colorType[color]} ${sizeType}`
            }
            onClick={onClick}
        >
            {text}
        </button>
    )
}

NextButton.defaultProps = {
    color: "red",
}
export { NextButton }
