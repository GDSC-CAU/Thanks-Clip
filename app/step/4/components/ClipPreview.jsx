"use client"

import { Suspense, lazy } from "react"

const Viewer = lazy(() => import("./Viewer.jsx"))

const loader = () => <>비디오 로딩중...</>

const ClipPreview = ({ videoClientProps }) => {
    return (
        <Suspense fallback={loader()}>
            <Viewer videoClientProps={videoClientProps} />
        </Suspense>
    )
}

export { ClipPreview }
