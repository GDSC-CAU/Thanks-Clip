import { AbsoluteFill, Img, staticFile } from "remotion"

const LogoSM = () => {
    return (
        <AbsoluteFill
            style={{ bottom: 0, alignItems: "center", justifyContent: "end" }}
        >
            <Img
                src={staticFile("logo/1line_red.png")}
                style={{ width: "240px", marginBottom: "-40px" }}
            />
        </AbsoluteFill>
    )
}

export { LogoSM }
