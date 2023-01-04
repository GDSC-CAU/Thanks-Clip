import { atom } from "jotai"

/**@typedef {{ isBold: boolean, isItalic: boolean, size: "sm" | "md" | "lg", font: "sm" | "md" | "lg", align: "center" | "left" | "right" }} LetterTextData */
/**@type {LetterTextData} */
const letterTextInitialValue = {
    align: "center",
    size: "md",
    font: null,
    isBold: false,
    isItalic: false,
}

const letterText = atom(letterTextInitialValue)

export { letterText }
