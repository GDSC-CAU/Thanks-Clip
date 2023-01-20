"use client"

import { useCallback } from "react"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useAtomValue } from "jotai"
import { store } from "../../../../../../../atoms"
import { Sticker } from "./Sticker"
import { useStickerManager } from "./useStickerManager"

const stickerTypes = ["heart", "circle", "star"]

const StickerToolBar = () => {
    const { action, stickers } = useStickerManager()
    const indexOfActiveSticker = useAtomValue(store.activeSticker)
    const isDisabled = indexOfActiveSticker === -1

    const addSticker = useCallback(
        (type) => {
            action.deactivate()
            action.create(type)
        },
        [action]
    )

    const updateSticker = useCallback(
        (stickers) => {
            action.deactivate()
            action.save(stickers)
        },
        [action]
    )

    return (
        <div className="flex flex-row divide-x divide-gray-100">
            <div className="flex flex-row justify-evenly items-center w-fit gap-5 px-4">
                {stickerTypes.map((type) => (
                    <div
                        key={type}
                        onClick={() => addSticker(type)}
                        className="flex items-center justify-center origin-center transform-gpu scale-125"
                    >
                        <Sticker type={type} />
                    </div>
                ))}
            </div>

            <div className="flex flex-row w-fit gap-2 px-3">
                <StickerEditorButton
                    disabled={isDisabled}
                    onClick={() => updateSticker(stickers)}
                    color="green"
                >
                    <CheckIcon className="w-4 h-4" />
                </StickerEditorButton>
                <StickerEditorButton
                    disabled={isDisabled}
                    onClick={() => {
                        action.delete(indexOfActiveSticker)
                    }}
                    color="red"
                >
                    <XMarkIcon className="w-4 h-4" />
                </StickerEditorButton>
            </div>
        </div>
    )
}

const stickerEditorButtonBackground = {
    green: "border-green-600 text-green-600",
    red: "border-red-600 text-red-600",
    gray: "border-gray-200 text-gray-200",
}

const StickerEditorButton = ({
    onClick,
    children,
    disabled = false,
    color = "green",
}) => {
    const disabledStyle = disabled
        ? "cursor-not-allowed"
        : "cursor-pointer hover:opacity-75 active:opacity-90"

    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center justify-center p-2 rounded-full border transition bg-white ${disabledStyle} ${
                stickerEditorButtonBackground[disabled ? "gray" : color]
            }`}
        >
            {children}
        </button>
    )
}

export { StickerToolBar }
