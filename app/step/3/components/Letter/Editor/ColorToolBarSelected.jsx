"use client"

import { useAtom } from "jotai"
import { store } from "../../../../../../atoms"
import { ColorToolBar } from "./ColorToolBar"

const BackgroundColorList = [
    {
        id: 1,
        fill: "bg-red-50",
        stroke: " border-red-400",
    },
    {
        id: 2,
        fill: "bg-yellow-50",
        stroke: " border-yellow-400",
        isSelected: "false",
    },
    {
        id: 3,
        fill: "bg-green-50",
        stroke: " border-green-400",
    },
    {
        id: 4,
        fill: "bg-blue-50",
        stroke: " border-blue-400",
    },
    {
        id: 5,
        fill: "bg-purple-50",
        stroke: " border-purple-400",
    },
]

const ColorToolBarSelected = () => {
    const [letter, setLetter] = useAtom(store.letter)

    const setBackgroundColor = (e) => {
        setLetter((letter) => ({
            ...letter,
            backgroundColor: e.target.selectedOption,
        }))
    }

    return (
        <div className="flex place-content-around gap-4 mx-3">
            {BackgroundColorList.map((backgroundColorItem) => (
                <ColorToolBar
                    key={backgroundColorItem.id}
                    selectedOption={
                        backgroundColorItem.fill + backgroundColorItem.stroke
                    }
                    onClick={setBackgroundColor}
                    isSelected={letter.backgroundColor ?? ""}
                ></ColorToolBar>
            ))}
        </div>
    )
}

export { ColorToolBarSelected }
