import { Container } from "./Container"
const EditorToolBar = (props) => {
    return (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <Container isEditorToolBar>{props.selectedOption}</Container>
        </div>
    )
}

export { EditorToolBar }
