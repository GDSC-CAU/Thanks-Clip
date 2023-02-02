//@ts-check
import { atomWithStorage } from "jotai/utils"

/**@typedef {{ backgroundColor: "white" | "ivory" | "red" | "yellow" | "blue", from: string | null, to: string | null, letter: string | null, letterType: "torn" | "hole" | "overlap", stickers?: import("./sticker").Sticker[], font: "cute" | "hand" | "sans", tags: {id: number, text: string}[] | null }} Letter */
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

const STORAGE_KEY = "THANKS_CLIP_LETTER"
const letter = atomWithStorage(STORAGE_KEY, letterInitialValue)

export { letter, STORAGE_KEY }
