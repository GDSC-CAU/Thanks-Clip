import { Composition } from "remotion"
import { RemotionComposition } from "./Composition.jsx"
import "../app/index.css"

const RemotionRoot = () => {
    return (
        <Composition
            //!TODO: deployConfig.js의 VIDEO_COMPOSITION_ID와 값이 반드시 동일해야 합니다!
            id={"thanks-clip"}
            component={RemotionComposition}
            //!TODO: durationInFrames / fps = video play second [s]
            fps={30}
            width={1000}
            height={1000}
            durationInFrames={90}
            //!TODO: 렌더링 용 props입니다!
            defaultProps={{
                name: "danpacho",
            }}
        />
    )
}

export { RemotionRoot }
