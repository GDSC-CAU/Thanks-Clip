import { AbsoluteFill } from "remotion"
import { Envelope } from "./components/Envelope"
import { FRAME_PER_KEYWORD, Keywords } from "./components/Keywords"
import { Letter } from "./components/Letter"
import { LogoSM } from "./components/LogoSM"
import { DURATION_PAPER_PLANE, PaperPlane } from "./components/PaperPlane"
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
                    DURATION_PAPER_PLANE -
                    90
                }
            >
                <Letter
                    to={to}
                    from="준성"
                    font="cute"
                    backgroundColor="yellow"
                    letter="이제 동작을 하고 있습니다...!"
                    letterType="torn"
                    size={300}
                    stickers={[
                        {
                            type: "star",
                            position: {
                                x: 266.0390625,
                                y: 140.3671875,
                            },
                            isActive: false,
                        },
                        {
                            type: "star",
                            position: {
                                x: 87.51171875,
                                y: 24.52734375,
                            },
                            isActive: false,
                        },
                        {
                            type: "heart",
                            position: {
                                x: 17.94140625,
                                y: 66.7421875,
                            },
                            isActive: false,
                        },
                    ]}
                />
            </Envelope>
            <LogoSM />
        </AbsoluteFill>
    )
}

export { RemotionComposition }
