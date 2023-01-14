import { useAtom } from "jotai"
import { store } from "../../../../../../atoms"

const color = {
    red: "bg-red-50",
    yellow: "bg-yellow-50",
    green: "bg-green-50",
    blue: "bg-blue-50",
    purple: "bg-purple-50",
}

const colorType = Object.keys(color)

const ColorSelectorButton = ({ handleClickColor, selectedColor, type }) => {
    const isActive = selectedColor === type
    const colorStyle = `rounded-full p-3 border-${type}-400 ${color[type]} ${
        isActive ? "border-4" : "border-2"
    }`

    return (
        <div
            className=""
            onClick={() => {
                handleClickColor(type)
            }}
        >
            <div className={colorStyle}></div>
        </div>
    )
}

const ColorToolBar = () => {
    const [letter, setLetter] = useAtom(store.letter)
    const handleClickColor = (color) => {
        setLetter((letter) => ({ ...letter, backgroundColor: color }))
    }
    return (
        <div className="flex content-center gap-4 mx-3 p-3">
            {colorType.map((type, idx) => (
                <ColorSelectorButton
                    handleClickColor={handleClickColor}
                    selectedColor={letter.backgroundColor}
                    type={type}
                    key={idx}
                />
            ))}
        </div>
    )
}

export { ColorToolBar }
