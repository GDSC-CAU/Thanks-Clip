"use client"

import { useState } from "react"
import { useAtomValue } from "jotai"
import { store } from "../../../../../../../atoms"
import { CircleIcon } from "./Sticker/Circle"
import { HeartIcon } from "./Sticker/Heart"
import { StarIcon } from "./Sticker/Star"
import { useStickerManager } from "./useStickerManager"

/**@typedef {import("../../../../../../../atoms/sticker").Sticker} Sticker */
/**
 * @param {{ type: Sticker["type"] }} stickerProps
 */
const Sticker = ({ type }) => {
    return (
        <>
            {type === "circle" && <CircleIcon />}
            {type === "heart" && <HeartIcon />}
            {type === "star" && <StarIcon />}
        </>
    )
}

const Movable = ({ position, children, size, isActive, onPointerEnter }) => {
    return (
        <div
            onPointerEnter={onPointerEnter}
            style={{
                position: "absolute",
                width: size,
                height: size,
                transform: `translate(${position.x}px, ${position.y}px)`,
                opacity: isActive ? 0.5 : 1,
                transition: "opacity ease 0.25s",
                zIndex: 100,
                pointerEvents: isActive ? "none" : "auto",
                userSelect: "none",
            }}
        >
            {children}
        </div>
    )
}

/**
 * @param {{size: number, stickers: Sticker[]}} props
 */
const StaticStickers = ({ size, stickers }) => (
    <div
        style={{
            width: size,
            height: size,
            zIndex: 0,
            backgroundColor: "transparent",
        }}
    >
        {stickers.map(({ type, position }) => (
            <Movable
                key={`${type}-${position.x}-${position.y}`}
                position={position}
                isActive={false}
                onPointerEnter={null}
            >
                <Sticker type={type} />
            </Movable>
        ))}
    </div>
)

const StickerManager = ({ size, stickerSize, active = false }) => {
    const { stickers, action } = useStickerManager()
    const activeSticker = useAtomValue(store.activeSticker)
    const [isCanvasDrag, setIsCanvasDrag] = useState(false)

    if (stickers.length === 0) {
        return null
    }

    if (active === false) {
        return <StaticStickers size={size} stickers={stickers} />
    }

    return (
        <div
            style={{
                width: size,
                height: size,
                zIndex: 0,
                backgroundColor: "transparent",
            }}
            onPointerDown={(e) => {
                const x = e.nativeEvent.offsetX
                const y = e.nativeEvent.offsetY
                const stickerPos = stickers[activeSticker]?.position
                if (stickerPos) {
                    const isSelected =
                        Math.abs(stickerPos.x - x) <= stickerSize &&
                        Math.abs(stickerPos.y - y) <= stickerSize
                    if (isSelected) {
                        setIsCanvasDrag(true)
                    }
                } else {
                    setIsCanvasDrag(false)
                }
            }}
            onPointerUp={() => {
                setIsCanvasDrag(false)
            }}
            onPointerMove={(e) => {
                if (isCanvasDrag) {
                    const x = e.nativeEvent.offsetX - stickerSize / 2
                    const y = e.nativeEvent.offsetY - stickerSize / 2
                    const pos = {
                        x: x,
                        y: y,
                    }
                    action.updatePosition(activeSticker, pos)
                }
            }}
        >
            {stickers.map(({ type, position, isActive }, stickerLocation) => {
                return (
                    <Movable
                        key={`${type}-${position.x}-${position.y}`}
                        position={position}
                        size={stickerSize}
                        isActive={isActive}
                        onPointerEnter={() => {
                            action.deactivate(activeSticker)
                            action.activate(stickerLocation)
                        }}
                    >
                        <Sticker type={type} />
                    </Movable>
                )
            })}
        </div>
    )
}

export { StickerManager, StaticStickers }
