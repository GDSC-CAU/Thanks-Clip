"use client"

import { useMemo } from "react"
import { useAtom, useSetAtom } from "jotai"
import { store } from "../../../../../../../atoms"

/**@typedef {import("../../../../../../../atoms/sticker").Sticker} Sticker */

const getRandomNumber = (min, max) => Math.random() * (max - min) + min

const useStickerManager = () => {
    const [stickers, setStickers] = useAtom(store.stickers)
    const setLetter = useSetAtom(store.letter)

    const action = useMemo(
        () => ({
            /**
             * @param {Sticker["type"]} type
             */
            create: (type) => {
                /**@type {Sticker} */
                const newSticker = {
                    type,
                    position: {
                        x: getRandomNumber(50, 175),
                        y: getRandomNumber(50, 175),
                    },
                    isActive: true,
                }
                setStickers((prev) =>
                    prev.length <= 4 ? [...prev, newSticker] : prev
                )
            },
            /**
             * @param {number} rmIndex
             */
            delete: (rmIndex) => {
                setStickers((prev) => prev.filter((_, i) => rmIndex !== i))
            },
            /**
             * @param {number} upIndex
             * @param {Sticker["position"]} position
             */
            updatePosition: (upIndex, position) => {
                setStickers((prev) =>
                    prev.map((sticker, i) =>
                        upIndex === i ? { ...sticker, position } : sticker
                    )
                )
            },
            /**
             * @param {number} upIndex
             */
            activate: (upIndex) => {
                setStickers((prev) =>
                    prev.map((sticker, i) =>
                        upIndex === i ? { ...sticker, isActive: true } : sticker
                    )
                )
            },
            /**
             * @param {number} upIndex
             */
            deactivate: () => {
                setStickers((prev) =>
                    prev.map((sticker) => ({ ...sticker, isActive: false }))
                )
            },
            /**
             * @param {Sticker[]} updatedStickers
             */
            save: (updatedStickers) => {
                setLetter((prev) => ({
                    ...prev,
                    stickers: updatedStickers,
                }))
            },
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return {
        stickers,
        action,
    }
}

export { useStickerManager }
