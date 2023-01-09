const keywordBtn =
    "px-7 py-1.5 text-lg border-solid border-2 rounded-full bg-gray-300 text-gray-500 border-gray-300"

const keywordBtnSelected =
    "px-7 py-1.5 text-lg border-solid border-2 rounded-full bg-red-400 text-white border-red-400 shadow-lg shadow-red-400/25"

const KeywordButton = ({ children, id, isSelected, onClick }) => {
    const keywordBtnStyle = `${isSelected ? keywordBtnSelected : keywordBtn}`
    return (
        <button className={keywordBtnStyle} onClick={() => onClick(id)}>
            {children}
        </button>
    )
}

export { KeywordButton }
