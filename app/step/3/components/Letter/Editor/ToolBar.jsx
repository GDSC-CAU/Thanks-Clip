import { Container } from "../../common/Container"
import { FontToolBar } from "./FontToolBar"
import { StickerEditor } from "./Stickers/StickerEditor"

const EditorToolBar = ({ selectedOption }) => {
    const isActive = selectedOption !== "none"
    return (
        <Container
            className={`flex items-center justify-center h-16 max-h-[4rem] z-50 ${
                isActive
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-0 translate-y-4 pointer-events-none"
            } absolute -bottom-10 left-1/2 -translate-x-1/2 transition-all duration-300`}
        >
            {selectedOption === "font" && <FontToolBar />}
            {selectedOption === "sticker" && <StickerEditor />}
        </Container>
    )
}

export { EditorToolBar }
