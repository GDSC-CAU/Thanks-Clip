const Container = ({ children, onClick, className }) => {
    return (
        <div
            className={`${className} bg-white shadow-lg rounded-full px-2 py-1 border border-gray-100 select-none transform-gpu`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
export { Container }
