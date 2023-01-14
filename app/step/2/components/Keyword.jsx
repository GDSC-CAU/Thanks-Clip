import { useCallback, useEffect, useState } from "react"
import { useAtom } from "jotai"
import { store } from "../../../../atoms"
import { KeywordButton } from "./KeywordButton"
import { KeywordTextList } from "./KeywordTextList"

const Keyword = ({ keywordNum, setKeywordNum, getKeywordNum }) => {
    const [, setLetter] = useAtom(store.letter)
    const [isSelected, setIsSelected] = useState(
        new Array(KeywordTextList.length).fill(false)
    )

    const setKeywordTags = useCallback(() => {
        const findKeywordIndex = isSelected
            .map((item, idx) => {
                if (item === true) return idx
                return -1
            })
            .filter((item) => item !== -1)
        const tags = KeywordTextList.filter((element) =>
            findKeywordIndex.includes(element.id)
        )
        setLetter((letter) => ({ ...letter, tags: tags }))
    }, [isSelected, setLetter])

    const countKeywordNum = useCallback(() => {
        setKeywordNum(isSelected.filter((element) => true === element).length)
    }, [isSelected, setKeywordNum])

    const handleKeywordButton = (id) => {
        setIsSelected((prevState) => [
            ...prevState.slice(0, id),
            !prevState[id],
            ...prevState.slice(id + 1),
        ])
    }

    useEffect(() => {
        countKeywordNum()
        setKeywordTags()
    }, [isSelected, setKeywordTags, countKeywordNum])

    useEffect(() => {
        getKeywordNum(keywordNum)
    }, [getKeywordNum, keywordNum])

    return (
        <>
            {KeywordTextList.map((keyword) => (
                <KeywordButton
                    keywordNum={keywordNum}
                    key={keyword.id}
                    id={keyword.id}
                    isSelected={isSelected[keyword.id]}
                    onClick={handleKeywordButton}
                >
                    {keyword.text}
                </KeywordButton>
            ))}
        </>
    )
}

export { Keyword }
