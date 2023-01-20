"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import { useMounted } from "../../step/RenderOnMount"

const randomInRange = (min, max) => Math.random() * (max - min) + min

/**@type {React.CSSProperties} */
const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
}

const getAnimationSettings = (originXA, originXB) => ({
    startVelocity: 30,
    spread: 500,
    ticks: 500,
    zIndex: 0,
    particleCount: 50,
    origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2,
    },
})

const Confetti = () => {
    const refAnimationInstance = useRef(null)
    const [intervalId, setIntervalId] = useState()

    const { isMounted } = useMounted()

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance
    }, [])

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3))
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9))
        }
    }, [])

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 1500))
        }
    }, [intervalId, nextTickAnimation])

    useEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    }, [intervalId])

    useEffect(() => {
        if (isMounted === true) startAnimation()
    }, [isMounted, startAnimation])

    return (
        <>
            {isMounted ? (
                <ReactCanvasConfetti
                    refConfetti={getInstance}
                    style={canvasStyles}
                />
            ) : null}
        </>
    )
}
export { Confetti }
