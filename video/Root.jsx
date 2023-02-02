import { Composition } from "remotion"
import "../app/index.css"
import { RemotionCompositionServer } from "./CompositionServer"

const VIDEO_CONFIG = {
    fps: 30,
    width: 720,
    height: 720,
    durationInFrames: 600,
}

const RemotionRoot = () => {
    return (
        <Composition
            /**
             * @note `VIDEO_COMPOSITION_ID`와 값이 반드시 동일해야 함
             */
            id="thanks-clip"
            component={RemotionCompositionServer}
            {...VIDEO_CONFIG}
        />
    )
}

export { RemotionRoot }
