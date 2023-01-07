import { Composition } from "remotion"
import { RemotionComposition } from "./Composition"
import "../index.css"

const VIDEO_CONFIG = {
    fps: 30,
    width: 1000,
    height: 1000,
}

const RemotionRoot = () => {
    return (
        <Composition
            id="video"
            component={RemotionComposition}
            // durationInFrames / fps = video play second [s]
            durationInFrames={90}
            {...VIDEO_CONFIG}
        />
    )
}

export { RemotionRoot }
