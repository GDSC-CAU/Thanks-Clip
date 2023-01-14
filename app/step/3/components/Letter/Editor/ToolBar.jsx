import { Container } from "../../common/Container"
import { ColorToolBar } from "./ColorToolBar"
import { FontToolBar } from "./FontToolBar"

const EditorToolBar = (props) => {
    const isActive = props.selectedOption !== ""
    return (
        <Container
            className={`flex items-center justify-center h-16 max-h-[4rem] ${
                isActive
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-0 translate-y-12 pointer-events-none"
            } absolute bottom-3 left-1/2 -translate-x-1/2 transition-all duration-300`}
        >
            {props.selectedOption === "color" && <ColorToolBar></ColorToolBar>}
            {props.selectedOption === "font" && <FontToolBar></FontToolBar>}
        </Container>
    )
}

export { EditorToolBar }
