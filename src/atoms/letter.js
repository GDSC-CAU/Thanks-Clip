import { atom } from "jotai"

const DEFAULT_LETTER_SIZE = {
    width: 500,
    height: 500,
}

/**@typedef {{ background: any | null, width: number, height: number, borderRadius: "none" | "md" | "full" , borderImage: any | null }} LetterData */
/**@type {LetterData} */
const letterInitialValue = {
    background: null,
    borderImage: null,
    borderRadius: "none",
    ...DEFAULT_LETTER_SIZE,
}

const letter = atom(letterInitialValue)

export { letter }
