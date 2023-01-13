import {
    Easing,
    Img,
    interpolate,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion/."

const DURATION_PAPERPLANE = 90

const PaperPlane = ({ delay = 180 }) => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    // const entrance = interpolate(frame, [0, 100])
    const entrance = interpolate(frame, [delay, delay + fps * 3], [720, -500], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.92, -0.05, 0.4, 0.5),
    })

    const scale = interpolate(frame, [delay, delay + fps * 3], [2, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })

    return (
        <div
            style={{
                transform: `translate(${entrance}px,${
                    0.000001 * entrance * entrance * entrance
                }px)`,
            }}
        >
            <Img
                id="plane"
                src={staticFile("logo/white.png")}
                style={{
                    width: 500,
                    transform: `scale(${scale})`,
                }}
            />
        </div>
    )
}

export { PaperPlane, DURATION_PAPERPLANE }
