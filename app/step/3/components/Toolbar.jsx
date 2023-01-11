import {
    DocumentIcon,
    PaintBrushIcon,
    PencilSquareIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid"
import { Container } from "./Container"

// const toolbarOptions = ["type", "color", "font", "sticker"]
const Toolbar = (props) => {
    const handleClick = (iconType) => {
        props.handleClickOptions(iconType)
    }
    return (
        <div className="flex flex-cols gap-1 justify-end absolute right-0 top-0">
            <Container>
                <DocumentIcon
                    className={`h-6 w-6 mt-1 ${
                        props.selectedOption === "type"
                            ? "text-red-400"
                            : "text-gray-500"
                    } `}
                    onClick={() => {
                        handleClick("type")
                    }}
                />
            </Container>
            <Container>
                <PaintBrushIcon
                    className={`h-6 w-6 mt-1 ${
                        props.selectedOption === "color"
                            ? "text-red-400"
                            : "text-gray-500"
                    } `}
                    onClick={() => {
                        handleClick("color")
                    }}
                />
            </Container>
            <Container>
                <PencilSquareIcon
                    className={`h-6 w-6 mt-1 ${
                        props.selectedOption === "font"
                            ? "text-red-400"
                            : "text-gray-500"
                    } `}
                    onClick={() => {
                        handleClick("font")
                    }}
                />
            </Container>
            <Container>
                <SparklesIcon
                    className={`h-6 w-6 mt-1 ${
                        props.selectedOption === "sticker"
                            ? "text-red-400"
                            : "text-gray-500"
                    } `}
                    onClick={() => {
                        handleClick("sticker")
                    }}
                />
            </Container>
        </div>
    )
}

export { Toolbar }
