//@ts-check
import { atom } from "jotai"

/**@typedef {{ backgroundColor: "white" | "ivory" | "red" | "yellow" | "blue", from: string | null, to: string | null, letter: string | null, letterType: "torn" | "hole" | "overlap", stickers?: import("./sticker").Sticker[], font: "cute" | "hand" | "sans", tags: string[] | null }} Letter */
/**@type {Letter} */
const letterInitialValue = {
    font: "sans",
    to: null,
    from: null,
    letter: null,
    tags: null,
    letterType: "torn",
    backgroundColor: "white",
}

const letter = atom(letterInitialValue)

export { letter }
