"use client"

import { useMemo } from "react"
import { useAtom } from "jotai"
import { store } from "../../../../../../../atoms"

/**@typedef {import("../../../../../../../atoms/sticker").Sticker} Sticker */

const getRandomNumber = (min, max) => Math.random() * (max - min) + min

const useStickerManager = () => {
    const [stickers, setStickers] = useAtom(store.stickers)

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
                        x: getRandomNumber(50, 200),
                        y: getRandomNumber(50, 200),
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
            deactivate: (upIndex) => {
                setStickers((prev) =>
                    prev.map((sticker, i) =>
                        upIndex === i
                            ? { ...sticker, isActive: false }
                            : sticker
                    )
                )
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
