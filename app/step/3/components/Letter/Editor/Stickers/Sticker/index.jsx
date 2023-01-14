import { CircleIcon } from "./Circle"
import { HeartIcon } from "./Heart"
import { StarIcon } from "./Star"

const Sticker = ({ type, props = {} }) => {
    return (
        <>
            {type === "circle" && <CircleIcon {...props} />}
            {type === "star" && <StarIcon {...props} />}
            {type === "heart" && <HeartIcon {...props} />}
        </>
    )
}

export { Sticker }
