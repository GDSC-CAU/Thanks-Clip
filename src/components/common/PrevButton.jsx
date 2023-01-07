import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { useNavigate } from "react-router-dom"

const PrevButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)}>
            <ChevronLeftIcon className="h-10 w-10" />
        </button>
    )
}

export { PrevButton }
