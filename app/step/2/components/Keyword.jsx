import { useCallback, useEffect, useState } from "react"
import { KeywordButton } from "./KeywordButton"
import { KeywordTextList } from "./KeywordTextList.json"

const Keyword = () => {
    const [, setKeywordList] = useState([])
    const [, setKeywordNum] = useState(0)
    const [isSelected, setSelect] = useState(
        new Array(KeywordTextList.length).fill(false)
    )

    useEffect(() => {
        countKeywordNum()
        getKeywordList()
    }, [isSelected, getKeywordList, countKeywordNum])

    const countKeywordNum = useCallback(() => {
        setKeywordNum(isSelected.filter((element) => true === element).length)
    }, [isSelected])

    const getKeywordList = useCallback(() => {
        const findKeywordIndex = isSelected
            .map((item, idx) => {
                if (item === true) return idx
                else return -1
            })
            .filter((item) => item !== -1)
        setKeywordList(
            KeywordTextList.filter((element) =>
                findKeywordIndex.includes(element.id)
            )
        )
    }, [isSelected])

    const handleKeywordButton = (id) => {
        setSelect([
            ...isSelected.slice(0, id),
            !isSelected[id],
            ...isSelected.slice(id + 1),
        ])
    }

    return (
        <>
            {KeywordTextList.map((keyword) => (
                <KeywordButton
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
