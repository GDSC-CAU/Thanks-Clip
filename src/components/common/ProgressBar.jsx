const progressBarWidth = {
    1: "w-1/4",
    2: "w-2/4",
    3: "w-3/4",
    4: "w-full",
}

const ProgressBar = ({ step }) => {
    return (
        <div className="w-full h-1 bg-gray-200 rounded-full">
            <div
                className={`transition-all duration-300 h-full bg-red-400 rounded-full ${progressBarWidth[step]}`}
            />
        </div>
    )
}

export { ProgressBar }
