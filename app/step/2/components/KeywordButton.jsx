const keywordBtn =
    "py-1.5 text-md border-solid border-2 rounded-full bg-gray-300 text-gray-500 border-gray-300"

const keywordBtnSelected =
    "py-1.5 text-md border-solid border-2 rounded-full bg-red-400 text-white border-red-400 shadow-lg shadow-red-400/25"

const KeywordButton = ({ children, id, isSelected, onClick }) => {
    const keywordBtnStyle = `${isSelected ? keywordBtnSelected : keywordBtn}`
    return (
        <button
            className={`h-12 w-full text-sm hover:scale-[101%] active:scale-95 transition ${keywordBtnStyle}`}
            onClick={() => onClick(id)}
        >
            {children}
        </button>
    )
}

export { KeywordButton }
