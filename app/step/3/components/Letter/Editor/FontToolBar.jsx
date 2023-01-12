import { useState } from "react"
import Image from "next/image"
import CuteFontIcon from "../../../../../../public/fontIcon/cute_black.svg"
import ActiveCuteFontIcon from "../../../../../../public/fontIcon/cute_red.svg"
import HandFontIcon from "../../../../../../public/fontIcon/hand_black.svg"
import ActiveHandFontIcon from "../../../../../../public/fontIcon/hand_red.svg"
import SansFontIcon from "../../../../../../public/fontIcon/sans_black.svg"
import ActiveSansFontIcon from "../../../../../../public/fontIcon/sans_red.svg"

const font = {
    cute: (isActive) =>
        isActive ? (
            <Image src={ActiveCuteFontIcon} alt=""></Image>
        ) : (
            <Image src={CuteFontIcon} alt=""></Image>
        ),
    hand: (isActive) =>
        isActive ? (
            <Image src={ActiveHandFontIcon} alt=""></Image>
        ) : (
            <Image src={HandFontIcon} alt=""></Image>
        ),
    sans: (isActive) =>
        isActive ? (
            <Image src={ActiveSansFontIcon} alt=""></Image>
        ) : (
            <Image src={SansFontIcon} alt=""></Image>
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
    const [selectedFont, setSelectedFont] = useState("")

    const handleClickFont = (font) => {
        setSelectedFont(font)
    }
    return (
        <div className="flex flex-cols">
            {fontType.map((type, idx) => (
                <FontSelectorButton
                    handleClickFont={handleClickFont}
                    selectedFont={selectedFont}
                    type={type}
                    key={idx}
                />
            ))}
        </div>
    )
}

export { FontToolBar }
