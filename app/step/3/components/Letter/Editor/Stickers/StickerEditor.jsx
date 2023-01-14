"use client"

import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useAtomValue } from "jotai"
import { store } from "../../../../../../../atoms"
import { Sticker } from "./Sticker"
import { useStickerManager } from "./useStickerManager"

const stickerTypes = ["heart", "circle", "star"]

const StickerEditor = () => {
    const { action } = useStickerManager()
    const activeSticker = useAtomValue(store.activeSticker)
    const isDisabled = activeSticker === -1

    return (
        <div className="flex flex-row divide-x divide-gray-100">
            <div className="flex flex-row justify-evenly items-center w-fit gap-5 px-4">
                {stickerTypes.map((type) => (
                    <div
                        key={type}
                        onClick={() => {
                            action.deactivate(activeSticker)
                            action.create(type)
                        }}
                        className="flex items-center justify-center origin-center transform-gpu scale-150"
                    >
                        <Sticker type={type} />
                    </div>
                ))}
            </div>

            <div className="flex flex-row w-fit gap-2 px-3">
                <StickerEditorButton
                    disabled={isDisabled}
                    onClick={() => {
                        action.deactivate(activeSticker)
                    }}
                    color="green"
                >
                    <CheckIcon className="w-4 h-4" />
                </StickerEditorButton>
                <StickerEditorButton
                    disabled={isDisabled}
                    onClick={() => {
                        action.delete(activeSticker)
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

export { StickerEditor }
