import {
    DocumentIcon,
    PaintBrushIcon,
    PencilSquareIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline"
import { Container } from "../../common/Container"

const icon = {
    type: (className) => <DocumentIcon className={className} />,
    color: (className) => <PaintBrushIcon className={className} />,
    font: (className) => <PencilSquareIcon className={className} />,
    sticker: (className) => <SparklesIcon className={className} />,
}
const toolBarType = Object.keys(icon)

const EditorToolBarSelectorButton = ({ handleClick, selectedOption, type }) => {
    const isActive = selectedOption === type
    return (
        <div
            onClick={() => {
                handleClick(type)
            }}
            className={`rounded-full z-50 hover:bg-gray-50 border transition gap-2 p-1 md:p-2 active:scale-90 ${
                isActive ? "border-red-200" : "border-transparent"
            }`}
        >
            {icon[type](
                `h-5 w-5 transition ${
                    isActive ? "text-red-400" : "text-gray-900"
                }`
            )}
        </div>
    )
}

const EditorToolBarSelector = (props) => {
    const handleClick = (selectedType) => {
        props.handleClickOptions(selectedType)
    }
    return (
        <Container className="flex flex-cols gap-2 justify-end absolute right-1 -top-5">
            {toolBarType.map((type) => (
                <EditorToolBarSelectorButton
                    handleClick={handleClick}
                    selectedOption={props.selectedOption}
                    type={type}
                    key={type}
                />
            ))}
        </Container>
    )
}

export { EditorToolBarSelector }
