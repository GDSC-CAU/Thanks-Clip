import { useAtom } from "jotai"
import { store } from "../../../../../../../atoms"
import { HoleIcon } from "./Icon/Hole"
import { OverlapIcon } from "./Icon/Overlap"
import { TornIcon } from "./Icon/Torn"

const shapeTypes = [
    { type: "torn", Icon: TornIcon },
    { type: "overlap", Icon: OverlapIcon },
    { type: "hole", Icon: HoleIcon },
]

const ShapeToolBar = () => {
    const [letter, setLetter] = useAtom(store.letter)
    return (
        <div className="flex flex-row justify-evenly items-center w-fit gap-6 px-4 ">
            {shapeTypes.map(({ Icon, type }) => {
                const iconColor =
                    letter.letterType === type ? "#f87171" : "#000"
                return (
                    <div
                        key={type}
                        onClick={() => {
                            setLetter((prev) => ({ ...prev, letterType: type }))
                        }}
                        className="flex items-center justify-center origin-center transform-gpu scale-125"
                    >
                        <Icon fill={iconColor} stroke={iconColor} />
                    </div>
                )
            })}
        </div>
    )
}

export { ShapeToolBar }
