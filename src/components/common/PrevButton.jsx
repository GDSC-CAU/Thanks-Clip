import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { LinkTo } from "./LinkTo"

const PrevButton = ({ step }) => {
    const prev = step === 1 ? "/" : `/step/${step - 1}`

    return (
        <LinkTo to={prev}>
            <button type="button">
                <ChevronLeftIcon className="h-10 w-10 -ml-3" />
            </button>
        </LinkTo>
    )
}

export { PrevButton }
