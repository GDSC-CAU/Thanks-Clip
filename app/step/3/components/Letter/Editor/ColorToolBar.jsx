import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { useAtom } from "jotai"
import { store } from "../../../../../../atoms"

const colors = {
    red: "bg-[#fff1f2] border-red-400 text-red-400",
    yellow: "bg-[#fefce6] border-yellow-400 text-yellow-400",
    blue: "bg-[#e8ffff] border-blue-400 text-blue-400",
    purple: "bg-[#f6f3ff] border-purple-400 text-purple-400",
    white: "bg-white border-gray-400 text-gray-400",
}

const colorKey = Object.keys(colors)

const ColorSelectorButton = ({ handleClickColor, selectedColor, color }) => {
    const isActive = selectedColor === color
    const buttonStyle = `mx-2 border-2 w-6 h-6 text-center leading-none rounded-full ${colors[color]}`

    return (
        <div
            onClick={() => {
                handleClickColor(color)
            }}
        >
            <div className={buttonStyle}>{isActive && <CheckCircleIcon />}</div>
        </div>
    )
}

const ColorToolBar = () => {
    const [letter, setLetter] = useAtom(store.letter)
    const handleClickColor = (color) => {
        setLetter((letter) => ({ ...letter, backgroundColor: color }))
    }
    return (
        <div className="flex items-center justify-center px-4">
            {colorKey.map((color, idx) => (
                <ColorSelectorButton
                    handleClickColor={handleClickColor}
                    selectedColor={letter.backgroundColor}
                    color={color}
                    key={idx}
                />
            ))}
        </div>
    )
}

export { ColorToolBar }
