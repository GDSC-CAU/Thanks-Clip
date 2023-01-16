const keywordBtn =
    "text-md border-solid border-2 rounded-full bg-gray-300 text-gray-500 border-gray-300"

const keywordBtnSelected =
    "text-md border-solid border-2 rounded-full bg-red-400 text-white border-red-400 shadow-lg shadow-red-400/25"

const KeywordButton = ({ children, id, isSelected, onClick, keywordNum }) => {
    const keywordBtnStyle = `${isSelected ? keywordBtnSelected : keywordBtn}`
    return (
        <button
            disabled={!isSelected && keywordNum >= 5}
            className={`h-12 w-full text-sm hover:scale-[101%] active:scale-95 transition break-keep ${keywordBtnStyle}`}
            onClick={() => onClick(id)}
        >
            {children}
        </button>
    )
}

export { KeywordButton }
