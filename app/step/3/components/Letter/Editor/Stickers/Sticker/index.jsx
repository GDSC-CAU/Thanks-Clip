/**@typedef {import("../../../../../../../../atoms/sticker").Sticker} Sticker */

import { CircleIcon } from "./Circle"
import { HeartIcon } from "./Heart"
import { StarIcon } from "./Star"

/**
 * @param {{ type: Sticker["type"] }} stickerProps
 */
const Sticker = ({ type }) => {
    return (
        <>
            {type === "circle" && <CircleIcon />}
            {type === "heart" && <HeartIcon />}
            {type === "star" && <StarIcon />}
        </>
    )
}

export { Sticker }
