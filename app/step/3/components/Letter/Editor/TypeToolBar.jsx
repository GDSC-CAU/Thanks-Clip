import { useAtom } from "jotai"
import { store } from "../../../../../../atoms"

const letterType = {
    torn: "torn",
    hole: "hole",
    overlap: "overlap",
}

const letterTypeKey = Object.keys(letterType)

const TypeSelectorButton = ({ handleClickType, selectedType, type }) => {
    const isActive = selectedType === type
    const buttonStyle = `mx-5 text-center leading-none ${type[type]} ${
        isActive ? "text-red-400" : "text-gray-900"
    }`

    return (
        <div
            onClick={() => {
                handleClickType(type)
            }}
        >
            <div className={buttonStyle}>{type}</div>
        </div>
    )
}

const TypeToolBar = () => {
    const [letter, setLetter] = useAtom(store.letter)
    const handleClickType = (type) => {
        setLetter((letter) => ({ ...letter, letterType: type }))
    }
    return (
        <div className="flex items-center justify-center">
            {letterTypeKey.map((type, idx) => (
                <TypeSelectorButton
                    handleClickType={handleClickType}
                    selectedType={letter.letterType}
                    type={type}
                    key={idx}
                />
            ))}
        </div>
    )
}

export { TypeToolBar }
