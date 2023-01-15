/**@typedef {{ type: "circle" | "star" | "heart", position: { x: number, y: number }, isActive: boolean }} Sticker */

import { atom } from "jotai"
import { STORAGE_KEY } from "./letter"

const isValueExist =
    JSON.parse(window?.localStorage.getItem(STORAGE_KEY))?.stickers !==
    undefined

/**@type {Sticker[]} */
const stickersInitialValue = isValueExist
    ? JSON.parse(window?.localStorage.getItem(STORAGE_KEY))?.stickers
    : []

const stickers = atom(stickersInitialValue)
const activeSticker = atom((get) => {
    const stickersGet = get(stickers)
    if (Array.isArray(stickersGet)) {
        return stickersGet.findIndex((s) => s.isActive === true)
    }
    return -1
})

export { stickers, activeSticker }
