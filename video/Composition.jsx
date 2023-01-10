import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from "remotion"

// 테스팅 용 컴포넌트
const TailwindTitle = ({ name }) => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()

    const entrance = spring({
        fps,
        frame,
        durationInFrames: 50,
    })

    const opacity = interpolate(frame, [20, 50], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })

    return (
        <h1
            style={{
                opacity: opacity,
                transform: `scale(${entrance})`,
                fontSize: "5rem",
                fontWeight: 800,
            }}
        >
            {name} / {frame}
        </h1>
    )
}

const RemotionComposition = ({ name }) => {
    return (
        <AbsoluteFill style={{ background: "white", padding: "1rem" }}>
            <TailwindTitle name={name} />
        </AbsoluteFill>
    )
}

export { RemotionComposition }
