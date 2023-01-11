import { Container } from "./Container"
const EditorToolBar = (props) => {
    return (
        // 처음 활성화되었을 때,
        <div className="">
            <Container isEditorToolBar>{props.selectedOption}</Container>
        </div>
    )
}

export { EditorToolBar }
