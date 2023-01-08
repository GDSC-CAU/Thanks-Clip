import { useState } from "react"
import { Button } from "../../components/common/Button"
import { KeywordButton } from "../../components/pages/KeywordButton"
import { KeywordTextList } from "../../components/pages/KeywordTextList"

export default function Step2() {
    // const [activeKeywordNum, setActiveKeywordNum] = useState(0)
    const [isSelected, setSelect] = useState(
        new Array(KeywordTextList.length).fill(false)
    )
    // const countActiveKeywordNum = () => {
    //     setActiveKeywordNum(
    //         keywordBtnActive.filter((element) => true === element).length
    //     )
    // }

    const handleKeywordButton = (idx) => {
        setSelect([
            ...isSelected.slice(0, idx),
            !isSelected[idx],
            ...isSelected.slice(idx + 1),
        ])
        // console.log(
        //     keywordBtnActive.filter((element) => true === element).length
        // )
        // countActiveKeywordNum()
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
