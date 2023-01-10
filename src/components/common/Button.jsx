const button = "px-7 py-3 text-lg border-solid border-2 rounded-full"

const buttonDisabled = "bg-gray-300 text-gray-600 border-gray-300"

const buttonColor = {
    red: "bg-red-400 text-white border-red-400",
    white: "bg-white text-gray-800 border-gray-800",
    gray: "bg-gray-300 text-white border-gray-300",
}

/**
 * @param {{ children: React.ReactNode, onClick: React.MouseEventHandler<HTMLButtonElement>, size?: "full" | "fit", color?: "red" | "white" | "gray", disabled?: true | false }} props
 */
const Button = ({
    children,
    onClick,
    size = "full",
    color = "red",
    disabled = false,
}) => {
    const buttonSize = size === "full" ? "w-full" : "w-fit"

    const buttonStyle = `${button}  ${
        disabled ? buttonDisabled : buttonColor[color]
    } ${buttonSize}`

    return (
        <button disabled={disabled} className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button }
