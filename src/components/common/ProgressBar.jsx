import { useLocation } from "react-router-dom"
// import { LinkTo } from "../../router"

const ProgressBar = ({ ...progressBarProps }) => {
    const step = useLocation().pathname.split("/").slice(-1)[0]

    return (
        <div {...progressBarProps}>
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                    className={`transition transition-all duration-300 h-full bg-red-400 rounded-full w-full ${`w-${step}/4`}`}
                ></div>
            </div>
            {/* Link Component for Test */}
            {/* <LinkTo to={`/step/${Number(step) - 1}`}>Step1</LinkTo> */}
            {/* <LinkTo to={`/step/${Number(step) + 1}`}>Step2</LinkTo> */}
        </div>
    )
}

export { ProgressBar }
