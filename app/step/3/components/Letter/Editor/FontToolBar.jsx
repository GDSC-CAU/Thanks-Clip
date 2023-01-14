import { useAtom } from "jotai"
import { store } from "../../../../../../atoms"

const font = {
    cute: "font-main-cute",
    hand: "font-main-hand",
    sans: "font-main-sans",
}

const fontType = Object.keys(font)

const FontSelectorButton = ({ handleClickFont, selectedFont, type }) => {
    const isActive = selectedFont === type
    const buttonStyle = `mx-5 text-center leading-none ${font[type]} ${
        isActive ? "text-red-400" : "text-gray-900"
    }`

    return (
        <div
            onClick={() => {
                handleClickFont(type)
            }}
        >
            <div className={buttonStyle}>
                {"Thanks"}
                <br />
                {"Clip"}
            </div>
        </div>
    )
}

const FontToolBar = () => {
    const [letter, setLetter] = useAtom(store.letter)
    const handleClickFont = (font) => {
        setLetter((letter) => ({ ...letter, font: font }))
    }
    return (
        <div className="flex items-center justify-center">
            {fontType.map((type, idx) => (
                <FontSelectorButton
                    handleClickFont={handleClickFont}
                    selectedFont={letter.font}
                    type={type}
                    key={idx}
                />
            ))}
        </div>
    )
}

export { FontToolBar }
