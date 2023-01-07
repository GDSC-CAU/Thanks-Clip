import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from "remotion"
import { Title } from "../components/common/Title.jsx"

// 테스팅 용 컴포넌트
const TailwindTitle = () => {
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
            className="text-red-400 text-6xl font-extrabold min-w-full w-full"
            style={{
                opacity: opacity,
                transform: `scale(${entrance})`,
            }}
        >
            Tailwindcss / {frame}
        </h1>
    )
}

const RemotionComposition = () => {
    return (
        <AbsoluteFill className="bg-white items-center justify-center px-8 w-full">
            <div className="flex items-start justify-center flex-col gap-10 w-full">
                <TailwindTitle />
                <Title main="컴포넌트" sub="불러올때 확장자도 있어야 합니다!" />
            </div>
        </AbsoluteFill>
    )
}

export { RemotionComposition }
