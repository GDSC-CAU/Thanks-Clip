import { useEffect, useState } from "react"
import { Button } from "../../components/common/Button"
import { LinkTo } from "../../components/common/LinkTo"
import { KeywordButton } from "../../components/pages/step2/KeywordButton"
import { KeywordTextList } from "../../components/pages/step2/KeywordTextList"

export default function Step2() {
    const [activeKeywordNum, setActiveKeywordNum] = useState(0)
    const [isSelected, setSelect] = useState(
        new Array(KeywordTextList.length).fill(false)
    )
    useEffect(() => {
        countActiveKeywordNum()
    }, [isSelected])

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
            <LinkTo to="/step/3">
                <Button
                    disabled={!(activeKeywordNum >= 2 && activeKeywordNum <= 5)}
                >
                    계속하기
                </Button>
            </LinkTo>
        </div>
    )
}
