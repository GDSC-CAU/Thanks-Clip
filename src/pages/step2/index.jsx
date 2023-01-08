import { useState } from "react"
import { KeywordButton } from "../../components/pages/KeywordButton"
import { KeywordTextList } from "../../components/pages/KeywordTextList"

export default function Step2() {
    const [keywordBtnActive, setKeywordBtnActive] = useState(
        new Array(KeywordTextList.length).fill(false)
    )
    const handleKeywordButton = (idx) => {
        setKeywordBtnActive([
            ...keywordBtnActive.slice(0, idx),
            !keywordBtnActive[idx],
            ...keywordBtnActive.slice(idx + 1),
        ])
    }
    return (
        <div>
            {KeywordTextList.map((item, idx) => (
                <KeywordButton
                    key={idx}
                    id={idx}
                    isSelected={keywordBtnActive[idx]}
                    keywordText={item.keywordText}
                    onClick={handleKeywordButton}
                ></KeywordButton>
            ))}
        </div>
    )
}
