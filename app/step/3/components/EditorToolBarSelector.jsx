import {
    DocumentIcon,
    PaintBrushIcon,
    PencilSquareIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid"
import { Container } from "./Container"
// import { Container } from "./Container"

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
            className={`rounded-full hover:bg-gray-50 border transition p-2 active:scale-90 ${
                isActive ? "border-red-200" : "border-transparent"
            }`}
        >
            {icon[type](
                `h-6 w-6 transition ${
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
        <Container className="flex flex-cols gap-1 justify-end absolute right-0 top-0">
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
