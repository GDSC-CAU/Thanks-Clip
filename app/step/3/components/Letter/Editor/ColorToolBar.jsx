const ColorToolBar = ({ selectedOption, isSelected, onClick }) => {
    const colorToolBarButtonStyle = `${
        isSelected ? "p-3 rounded-full border-4" : " p-3 rounded-full border-2"
    }
  ${selectedOption}`

    return <div className={colorToolBarButtonStyle} onClick={onClick}></div>
}

export { ColorToolBar }
