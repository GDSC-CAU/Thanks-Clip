"use client"

import { useEffect, useRef, useState } from "react"
import { Player } from "@remotion/player"
import { VIDEO_CONFIG } from "../../../../constant/videoConfig.js"
import { RemotionCompositionClient } from "../../../../video/CompositionClient.jsx"

const useViewerSize = ({ containerRef }) => {
    const [size, setSize] = useState(0)

    useEffect(() => {
        setSize(
            Math.min(containerRef.current.offsetWidth, window.innerHeight - 348)
        )

        const resizeHandler = () => {
            setSize(
                Math.min(
                    containerRef.current.offsetWidth,
                    window.innerHeight - 348
                )
            )
        }

        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [containerRef])

    return {
        size,
    }
}

const Viewer = ({ videoClientProps }) => {
    const viewerRef = useRef(null)
    const { size } = useViewerSize({ containerRef: viewerRef })
    return (
        <div className="w-full flex-1" ref={viewerRef}>
            <Player
                component={RemotionCompositionClient}
                style={{
                    width: size + "px",
                    minWidth: size + "px",
                    height: size + "px",
                    minHeight: size + "px",
                    borderRadius: "10px",
                    margin: "auto",
                }}
                durationInFrames={VIDEO_CONFIG.durationInFrames}
                compositionWidth={VIDEO_CONFIG.width}
                compositionHeight={VIDEO_CONFIG.height}
                fps={VIDEO_CONFIG.fps}
                controls
                showVolumeControls={false}
                inputProps={videoClientProps}
            />
        </div>
    )
}

export { Viewer }
