const NextButton = ({ isDisable, text, onClick, type }) => {
    const btnType = ["red", "white"].includes(type) ? type : "red"
    return (
        <button
            disabled={isDisable}
            className={
                isDisable
                    ? "px-7 py-3 w-full bg-gray-300 text-lg text-gray-600 border-solid border-2 border-gray-300 rounded-full"
                    : btnType === "red"
                    ? "px-7 py-3 w-full bg-red-400 text-white border-solid border-2 border-red-400 rounded-full"
                    : "px-7 py-3 w-full bg-white text-xl text-gray-800 border-solid border-2 border-gray-800 rounded-full"
            }
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export { NextButton }
