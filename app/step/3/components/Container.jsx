const Container = ({ children, onClick, isEditorToolBar = false }) => {
    const toolBarStyle = `${
        isEditorToolBar ? "h-20 w-fit px-7 py-4 " : "h-10 w-10 px-1.5 py-1.5"
    }  flex flex-cols items-align justify-center shadow-md shadow-gray-500/20 rounded-full`
    return (
        <div className={toolBarStyle} onClick={onClick}>
            {children}
        </div>
    )
}
export { Container }
