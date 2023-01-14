/**@typedef {{ type: "circle" | "star" | "heart", position: { x: number, y: number }, isActive: boolean }} Sticker */

import { atom } from "jotai"

/**@type {Sticker[]} */
const stickersInitialValue = []
const stickers = atom(stickersInitialValue)
const activeSticker = atom((get) => {
    const stickersGet = get(stickers)
    if (Array.isArray(stickersGet)) {
        return stickersGet.findIndex((s) => s.isActive === true)
    }
    return -1
})

export { stickers, activeSticker }
