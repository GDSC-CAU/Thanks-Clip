import { atom } from "jotai"

/**@typedef {{ from: string | null, to: string | null, tags: string[] | null, letter: import("./letter.js").LetterData | null, letterText: import("./letterText").LetterTextData | null }} VideoData */
/**@type {VideoData} */
const videoInitialValue = {
    from: null,
    to: null,
    tags: null,
    letter: null,
    letterText: null,
}

const video = atom(videoInitialValue)

export { video }
