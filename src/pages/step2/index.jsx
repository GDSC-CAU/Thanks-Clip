import { useState } from "react"
import { KeywordButton } from "../../components/pages/KeywordButton"
import { KeywordTextList } from "../../components/pages/KeywordTextList"

export default function Step1() {
    const [KeywordBtnActive, setKeywordBtnActive] = useState(null)
    const toggleActive = (idx) => setKeywordBtnActive(idx)
    return (
        <div>
            {KeywordTextList.map((item, idx) => (
                <KeywordButton
                    key={idx}
                    id={idx}
                    isSelected={idx === KeywordBtnActive}
                    keywordText={item.keywordText}
                    onClick={toggleActive}
                ></KeywordButton>
            ))}
        </div>
    )
}
