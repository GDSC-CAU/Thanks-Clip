import { useLocation } from "react-router-dom"

const progressBarWidth = {
    1: "w-1/4",
    2: "w-2/4",
    3: "w-3/4",
    4: "w-full",
}

const ProgressBar = ({ ...progressBarProps }) => {
    const step = useLocation().pathname.split("/").slice(-1)[0]

    return (
        <div {...progressBarProps}>
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                    className={`transition-all duration-300 h-full bg-red-400 rounded-full ${progressBarWidth[step]}`}
                />
            </div>
        </div>
    )
}

export { ProgressBar }
