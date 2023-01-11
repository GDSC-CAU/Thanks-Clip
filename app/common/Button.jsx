const button =
    "flex items-center justify-center gap-1 px-7 py-3 text-lg border-solid border-2 rounded-full transition"

const buttonDisabled = "opacity-50 cursor-not-allowed"

const buttonColor = {
    red: "bg-red-400 text-white border-red-400",
    white: "bg-white text-gray-800 border-gray-800",
    gray: "bg-gray-300 text-white border-gray-300",
    lightGray: "bg-gray-300 text-gray-600 border-gray-300 ",
}

/**
 * @param {{ children: React.ReactNode, onClick: React.MouseEventHandler<HTMLButtonElement>, size?: "full" | "fit", color?: "red" | "white" | "gray" | "lightGray", disabled?: true | false, className?: string }} props
 */
const Button = ({
    children,
    onClick,
    size = "full",
    color = "red",
    disabled = false,
    className,
}) => {
    const buttonSize = size === "full" ? "w-full" : "w-fit"

    const buttonStyle = `${button} ${disabled ? buttonDisabled : ""} ${
        buttonColor[disabled ? "lightGray" : color]
    } ${buttonSize} ${className ?? ""}`

    return (
        <button disabled={disabled} className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button }
