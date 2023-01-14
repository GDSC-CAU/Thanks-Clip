import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
} from "remotion/."

const FRAME_PER_KEYWORD = 60

const Keyword = ({ keyword, idx }) => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const opacity = interpolate(
        frame,
        [
            FRAME_PER_KEYWORD * idx,
            FRAME_PER_KEYWORD * idx + fps / 2,
            FRAME_PER_KEYWORD * (idx + 1) - fps / 2,
            FRAME_PER_KEYWORD * (idx + 1),
        ],
        [0, 1, 1, 0]
    )

    const translateY = interpolate(
        frame,
        [
            FRAME_PER_KEYWORD * idx,
            FRAME_PER_KEYWORD * idx + fps / 2,
            FRAME_PER_KEYWORD * (idx + 1) - fps / 2,
            FRAME_PER_KEYWORD * (idx + 1),
        ],
        [1, 0, 0, 1]
    )

    return (
        <AbsoluteFill
            style={{
                fontSize: "4rem",
                top: "calc(50% - 2rem)",
                textAlign: "center",
                opacity: opacity,
                transform: `translateY(${translateY}rem)`,
                fontWeight: "bold",
            }}
        >
            {keyword}
        </AbsoluteFill>
    )
}

const Keywords = ({ keywords }) => {
    return (
        <AbsoluteFill>
            {keywords.map((keyword, idx) => (
                <Keyword keyword={keyword} idx={idx} key={keyword + idx} />
            ))}
        </AbsoluteFill>
    )
}

export { Keywords, FRAME_PER_KEYWORD }
