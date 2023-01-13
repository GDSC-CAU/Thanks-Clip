import { Container } from "../../common/Container"
import { FontToolBar } from "./FontToolBar"
import { TypeToolBar } from "./TypeToolBar"

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
            {props.selectedOption === "type" && <TypeToolBar />}
            {props.selectedOption === "font" && <FontToolBar />}
        </Container>
    )
}

export { EditorToolBar }
