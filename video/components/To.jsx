import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
} from "remotion"

const DURATION_TO = 60

const To = ({ delay, children }) => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const opacity = interpolate(
        frame,
        [
            delay,
            delay + fps / 2,
            delay + DURATION_TO - fps / 2,
            delay + DURATION_TO,
        ],
        [0, 1, 1, 0]
    )

    const translateY = interpolate(
        frame,
        [
            delay,
            delay + fps / 2,
            delay + DURATION_TO - fps / 2,
            delay + DURATION_TO,
        ],
        [1, 0, 0, 1]
    )

    return (
        <AbsoluteFill
            style={{
                fontSize: "3rem",
                top: "calc(50% - 1.5rem)",
                textAlign: "center",
                opacity: opacity,
                transform: `translateY(${translateY}rem)`,
            }}
        >
            {children}에게
        </AbsoluteFill>
    )
}

export { To, DURATION_TO }
