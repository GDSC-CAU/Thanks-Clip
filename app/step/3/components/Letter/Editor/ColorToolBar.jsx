import { CheckIcon } from "@heroicons/react/24/outline"
import { useAtom } from "jotai"
import { store } from "../../../../../../atoms"

const colors = {
    white: "bg-white border-gray-400 text-gray-400",
    ivory: "bg-[#f2f3ec] border-[#bec1bc] text-[#bec1bc]",
    red: "bg-[#fff1f2] border-red-400 text-red-400",
    yellow: "bg-[#fefce6] border-yellow-400 text-yellow-400",
    blue: "bg-[#dffaff] border-blue-400 text-blue-400",
}

const colorKey = Object.keys(colors)

const ColorSelectorButton = ({ handleClickColor, selectedColor, color }) => {
    const isActive = selectedColor === color
    const buttonStyle = `mx-2 border w-7 h-7 text-center leading-none rounded-full flex justify-center items-center ${colors[color]}`

    return (
        <div
            onClick={() => {
                handleClickColor(color)
            }}
        >
            <div className={buttonStyle}>
                {isActive && <CheckIcon className="w-4 h-4" />}
            </div>
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
