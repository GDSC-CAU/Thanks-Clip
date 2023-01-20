import { AbsoluteFill } from "remotion"
import { LetterStaticClient } from "../app/step/3/components/Letter/LetterStatic"
import { Envelope } from "./components/Envelope"
import { FRAME_PER_KEYWORD, Keywords } from "./components/Keywords"
import { LogoSM } from "./components/LogoSM"
import { DURATION_PAPER_PLANE, PaperPlane } from "./components/PaperPlane"
import { DURATION_TO, To } from "./components/To"

/**
 * video client용
 * @param {{size: number, from: string, to: string, letter: string, stickers: Sticker[], letterType: "hole" | "overlap" | "torn", font: "cute" | "sans" | "hand", backgroundColor: "white" | "ivory" | "red" | "yellow" | "blue", tags: string[] }} clientProps
 */
const RemotionCompositionClient = ({ tags, ...letterProps }) => {
    return (
        <AbsoluteFill style={{ background: "white", padding: "1rem" }}>
            <Keywords keywords={tags} />
            <To delay={FRAME_PER_KEYWORD * tags.length}>{letterProps.to}</To>
            <PaperPlane
                delay={FRAME_PER_KEYWORD * tags.length + DURATION_TO - 60}
            />
            <Envelope
                delay={
                    FRAME_PER_KEYWORD * tags.length +
                    DURATION_TO +
                    DURATION_PAPER_PLANE -
                    90
                }
            >
                <LetterStaticClient {...letterProps} />
            </Envelope>
            <LogoSM />
        </AbsoluteFill>
    )
}

export { RemotionCompositionClient }
