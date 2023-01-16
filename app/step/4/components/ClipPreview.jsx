"use client"
import { Player } from "@remotion/player"
import { RemotionCompositionClient } from "../../../../video/CompositionClient.jsx"
import { VIDEO_CONFIG } from "../video-config"

const ClipPreview = ({ videoClientProps }) => {
    return (
        <Player
            component={RemotionCompositionClient}
            style={{ width: "100%", borderRadius: "10px" }}
            durationInFrames={VIDEO_CONFIG.durationInFrames}
            compositionWidth={VIDEO_CONFIG.width}
            compositionHeight={VIDEO_CONFIG.height}
            fps={VIDEO_CONFIG.fps}
            controls
            showVolumeControls={false}
            inputProps={videoClientProps}
        />
    )
}

export { ClipPreview }
