import { AbsoluteFill } from "remotion"
import { Envelope } from "./components/Envelope"
import { FRAME_PER_KEYWORD, Keywords } from "./components/Keywords"
import { Letter } from "./components/Letter"
import { LogoSM } from "./components/LogoSM"
import { DURATION_PAPER_PLANE, PaperPlane } from "./components/PaperPlane"
import { DURATION_TO, To } from "./components/To"

/**@typedef {import("../atoms/sticker.js").Sticker} Sticker */
/**@typedef  {{size: number, to: string, letterTextSVG: string, stickers: Sticker[], letterType: "hole" | "overlap" | "torn", backgroundColor: "white" | "ivory" | "red" | "yellow" | "blue", tags: string[] }} LetterVideoProps */

/**
 * video 서버용
 * @param {LetterVideoProps} letterVideoProps
 */
const RemotionCompositionServer = ({
    to,
    tags,
    backgroundColor,
    letterTextSVG,
    letterType,
    size,
    stickers,
}) => {
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
                    DURATION_PAPER_PLANE -
                    90
                }
            >
                <Letter
                    size={size}
                    stickers={stickers}
                    letterType={letterType}
                    letterTextSVG={letterTextSVG}
                    backgroundColor={backgroundColor}
                />
            </Envelope>
            <LogoSM />
        </AbsoluteFill>
    )
}

export { RemotionCompositionServer }
