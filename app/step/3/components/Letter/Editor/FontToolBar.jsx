import { useAtom } from "jotai"
import Image from "next/image"
import { store } from "../../../../../../atoms"
import CuteFontIcon from "../../../../../../public/fontIcon/cute_black.svg"
import ActiveCuteFontIcon from "../../../../../../public/fontIcon/cute_red.svg"
import HandFontIcon from "../../../../../../public/fontIcon/hand_black.svg"
import ActiveHandFontIcon from "../../../../../../public/fontIcon/hand_red.svg"
import SansFontIcon from "../../../../../../public/fontIcon/sans_black.svg"
import ActiveSansFontIcon from "../../../../../../public/fontIcon/sans_red.svg"

const font = {
    cute: (isActive) =>
        isActive ? (
            <Image className="mx-3" src={ActiveCuteFontIcon} alt=""></Image>
        ) : (
            <Image className="mx-3" src={CuteFontIcon} alt=""></Image>
        ),
    hand: (isActive) =>
        isActive ? (
            <Image className="mx-3" src={ActiveHandFontIcon} alt=""></Image>
        ) : (
            <Image className="mx-3" src={HandFontIcon} alt=""></Image>
        ),
    sans: (isActive) =>
        isActive ? (
            <Image className="mx-3" src={ActiveSansFontIcon} alt=""></Image>
        ) : (
            <Image className="mx-3" src={SansFontIcon} alt=""></Image>
        ),
}

const fontType = Object.keys(font)

const FontSelectorButton = ({ handleClickFont, selectedFont, type }) => {
    const isActive = selectedFont === type

    return (
        <div
            onClick={() => {
                handleClickFont(type)
            }}
        >
            {font[type](isActive)}
        </div>
    )
}

const FontToolBar = () => {
    const [letter, setLetter] = useAtom(store.letter)
    console.log(letter)
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
