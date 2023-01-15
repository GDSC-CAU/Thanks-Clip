"use client"

import { useEffect, useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
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
const StickersStatic = ({ size, stickers }) => (
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

const useLockMobileTouch = (isActive) => {
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        const body = document.querySelector("body")
        const editorLocation = 100

        if (isActive) {
            body.style.overflow = "hidden"

            window.scrollTo({ top: editorLocation })

            const blockTouchMoveAndFixViewport = (e) => {
                e.preventDefault()
            }
            window.addEventListener("touchmove", blockTouchMoveAndFixViewport, {
                passive: false,
            })

            return () => {
                body.removeAttribute("style")
                window.removeEventListener(
                    "touchmove",
                    blockTouchMoveAndFixViewport
                )
            }
        }
    }, [isActive])
}

const useSaveStickers = (isActive, stickers) => {
    const setLetter = useSetAtom(store.letter)
    useEffect(() => {
        if (isActive) {
            setLetter((prev) => ({ ...prev, stickers }))
        }
    }, [isActive, stickers, setLetter])
}

const StickerManager = ({
    size,
    stickerSize,
    clickActiveAreaRatio = 1,
    active = false,
}) => {
    const { stickers, action } = useStickerManager()
    const activeSticker = useAtomValue(store.activeSticker)
    const [isCanvasDrag, setIsCanvasDrag] = useState(false)

    useSaveStickers(active, stickers)
    useLockMobileTouch(active)

    if (stickers.length === 0) {
        return null
    }

    if (active === false) {
        return <StickersStatic size={size} stickers={stickers} />
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
                        Math.abs(stickerPos.x - x) <=
                            stickerSize * clickActiveAreaRatio &&
                        Math.abs(stickerPos.y - y) <=
                            stickerSize * clickActiveAreaRatio

                    if (isSelected) setIsCanvasDrag(true)
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

export { StickerManager, StickersStatic }
