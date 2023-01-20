/**@typedef {{ type: "circle" | "star" | "heart", position: { x: number, y: number }, isActive: boolean }} Sticker */

import { atom } from "jotai"
import { STORAGE_KEY } from "./letter"

/**@type {Sticker[]} */
const getStickersInitialValue = () => {
    if (!window) {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY))?.stickers
    }
    return []
}

const stickers = atom(getStickersInitialValue())
const activeSticker = atom((get) => {
    const stickersGet = get(stickers)
    if (Array.isArray(stickersGet)) {
        return stickersGet.findIndex((s) => s.isActive === true)
    }
    return -1
})

export { stickers, activeSticker }
