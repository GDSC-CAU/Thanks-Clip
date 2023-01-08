import { useEffect, useState } from "react"
import { Button } from "../../components/common/Button"
import { KeywordButton } from "../../components/pages/KeywordButton"
import { KeywordTextList } from "../../components/pages/KeywordTextList"

export default function Step2() {
    const [activeKeywordNum, setActiveKeywordNum] = useState(0)
    const [isSelected, setSelect] = useState(
        new Array(KeywordTextList.length).fill(false)
    )
    useEffect(() => {
        countActiveKeywordNum()
    }, [isSelected])

    useEffect(() => {
        if (activeKeywordNum >= 5) {
            console.log("최대 5개까지만 추가할 수 있습니다")
        }
    }, [activeKeywordNum])

    const countActiveKeywordNum = () => {
        setActiveKeywordNum(
            isSelected.filter((element) => true === element).length
        )
    }

    const handleKeywordButton = (idx) => {
        setSelect([
            ...isSelected.slice(0, idx),
            !isSelected[idx],
            ...isSelected.slice(idx + 1),
        ])
    }

    return (
        <div>
            {KeywordTextList.map((item, idx) => (
                <KeywordButton
                    key={idx}
                    id={idx}
                    isSelected={isSelected[idx]}
                    keywordText={item.keywordText}
                    onClick={handleKeywordButton}
                ></KeywordButton>
            ))}
            <Button>계속하기</Button>
        </div>
    )
}
