"use client"
import { Player } from "@remotion/player"
import { RemotionComposition } from "../../../../video/Composition"
// import { RemotionRoot } from "../../../../video/Root"
import { VIDEO_CONFIG } from "../video-config"

const SampleLetter = {
    to: "준성",
    from: "일상",
    letter: "아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아",
    font: "sans",
    tags: ["사랑스러운", "고마운", "항상 도움을 주는"],
}

const ClipPreview = () => {
    return (
        <Player
            component={RemotionComposition}
            style={{
                flex: "1 1 0",
                width: "fit",
                maxWidth: "100%",
                borderRadius: "5px",
            }}
            inputProps={SampleLetter}
            durationInFrames={VIDEO_CONFIG.durationInFrames}
            compositionWidth={VIDEO_CONFIG.width}
            compositionHeight={VIDEO_CONFIG.height}
            fps={VIDEO_CONFIG.fps}
            controls
            showVolumeControls={false}
        />
    )
}

export { ClipPreview }
