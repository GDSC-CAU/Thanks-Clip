import { Nav } from "../common/Nav"
import { RenderOnMount } from "./RenderOnMount"

export default function StepLayout({ children }) {
    return (
        <RenderOnMount>
            <Nav />
            <div className="h-full flex flex-col justify-between">
                {children}
            </div>
        </RenderOnMount>
    )
}
