import { AbsoluteFill } from "remotion"
import { Envelope } from "./components/Envelope"
import { FRAME_PER_KEYWORD, Keywords } from "./components/Keywords"
import { LogoSM } from "./components/LogoSM"
import { DURATION_PAPERPLANE, PaperPlane } from "./components/PaperPlane"
import { DURATION_TO, To } from "./components/To"

const RemotionComposition = ({ to, tags }) => {
    return (
        <AbsoluteFill style={{ background: "white", padding: "1rem" }}>
            <Keywords keywords={tags} />
            <To delay={FRAME_PER_KEYWORD * tags.length}>{to}</To>
            <PaperPlane
                delay={FRAME_PER_KEYWORD * tags.length + DURATION_TO - 60}
            />
            <Envelope
                delay={
                    FRAME_PER_KEYWORD * tags.length +
                    DURATION_TO +
                    DURATION_PAPERPLANE -
                    90
                }
            />
            <LogoSM />
        </AbsoluteFill>
    )
}

export { RemotionComposition }
