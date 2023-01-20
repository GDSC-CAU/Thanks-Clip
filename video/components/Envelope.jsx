import {
    AbsoluteFill,
    Easing,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
} from "remotion"

const DURATION_ENVELOPE = 135

const Envelope = ({ delay = 240, children, render }) => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const entrance = interpolate(
        frame,
        [delay, delay + 1.5 * fps],
        [-640, 540],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.55, 0.15, 0.05, 1.32),
        }
    )

    const rotate = interpolate(
        frame,
        [delay, delay + 1.5 * fps],
        [0, 4 * Math.PI],
        {
            easing: Easing.in(Easing.ease),
        }
    )

    const flapDegree = interpolate(
        frame,
        [delay + 2 * fps, delay + 2.5 * fps],
        [0, 180],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.bounce),
        }
    )

    const zoom = interpolate(
        frame,
        [delay + 3.5 * fps, delay + 4.5 * fps],
        [1, 1.95],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.2, 0.15, 0.0, 1.32),
        }
    )

    const exit = interpolate(
        frame,
        [delay + 3 * fps, delay + 4.5 * fps],
        [0, 1440],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.2, 0.15, 0.0, 1.32),
        }
    )

    return (
        <AbsoluteFill
            style={{
                width: "800px",
                height: "600px",
                margin: "0 auto",
                backgroundColor: "#dfdfdf",
                top: entrance + exit + "px",
                transform: `rotate(${8 * Math.sin(rotate)}deg) ${
                    render && "scale(2,2)"
                }`,
                // filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.03)) drop-shadow(0 2px 20px rgb(0 0 0 / 0.04))",
            }}
        >
            {/* <div className="z-10">{springRotate}</div> */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }}
            >
                {/* flap */}
                <div
                    style={{
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderTop: "400px solid #f8f8f8",
                        borderLeft: "400px solid transparent",
                        borderRight: "400px solid transparent",
                        top: 0,
                        left: 0,
                        zIndex: delay + fps * 2.5 > frame ? 4 : 1,
                        transformOrigin: "top",
                        transform: `rotateX(${flapDegree}deg)`,
                    }}
                />

                <div style={{ width: "100%", height: "100%" }}>
                    {/* card-front */}
                    <div
                        style={{
                            position: "absolute",
                            width: 0,
                            height: 0,
                            borderBottom: "300px solid #f4f4f4",
                            borderLeft: "400px solid transparent",
                            borderRight: "400px solid transparent",
                            bottom: 0,
                            left: 0,
                            zIndex: 3,
                        }}
                    />
                    {/* card-left */}
                    <div
                        style={{
                            position: "absolute",
                            borderBottom: "300px solid transparent",
                            borderTop: "300px solid transparent",
                            width: 0,
                            height: 0,
                            borderRight: "401px solid transparent",
                            borderLeft: "401px solid #ebeae4",
                            top: "0px",
                            left: "0px",
                            zIndex: 2,
                        }}
                    />
                    {/* card-right */}
                    <div
                        style={{
                            position: "absolute",
                            borderBottom: "300px solid transparent",
                            borderTop: "300px solid transparent",
                            width: 0,
                            height: 0,
                            borderRight: "401px solid #ebeae4",
                            borderLeft: "401px solid transparent",
                            top: "0px",
                            right: "0px",
                            zIndex: 2,
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "calc(50% - 148px)",
                    bottom: (exit * 13) / 12 + 151 + "px",
                    zIndex: 1,
                    transform: `scale(${zoom * 2})`,
                }}
            >
                {children}
            </div>
        </AbsoluteFill>
    )
}

export { Envelope, DURATION_ENVELOPE }
