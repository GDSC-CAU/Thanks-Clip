import { Composition } from "remotion"
// import { CONFIG } from "../constant/deployConfig.js"
import { RemotionComposition } from "./Composition.jsx"
import "../app/index.css"

const RemotionRoot = () => {
    return (
        <Composition
            id={"thanks-clip"}
            component={RemotionComposition}
            // durationInFrames / fps = video play second [s]
            fps={30}
            width={1000}
            height={1000}
            durationInFrames={90}
            //!TODO: 렌더링 용 props
            defaultProps={{
                name: "danpacho",
            }}
        />
    )
}

export { RemotionRoot }
