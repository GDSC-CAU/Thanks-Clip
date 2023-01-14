import { Composition } from "remotion"
import { RemotionComposition } from "./Composition.jsx"
import "../app/index.css"

const VIDEO_CONFIG = {
    fps: 30,
    width: 720,
    height: 720,
    durationInFrames: 600,
}

const SampleLetter = {
    to: "준성",
    from: "일상",
    letter: "아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아",
    font: "sans",
    tags: ["사랑스러운", "고마운", "항상 도움을 주는"],
}

const RemotionRoot = () => {
    return (
        <Composition
            //!TODO: deployConfig.js의 VIDEO_COMPOSITION_ID와 값이 반드시 동일해야 합니다!
            id={"thanks-clip"}
            component={RemotionComposition}
            {...VIDEO_CONFIG}
            defaultProps={SampleLetter}
        />
    )
}

export { RemotionRoot }
