import { useEffect, useState } from "react"
import { Button } from "../../components/common/Button"
import { LinkTo } from "../../components/common/LinkTo"
import { Title } from "../../components/common/Title"
import { KeywordButton } from "../../components/pages/step2/KeywordButton"
import { KeywordTextList } from "../../components/pages/step2/KeywordTextList.json"

export default function Step2() {
    const [keywordList, setKeywordList] = useState([])
    const [keywordNum, setKeywordNum] = useState(0)
    const [isSelected, setSelect] = useState(
        new Array(KeywordTextList.length).fill(false)
    )
    console.log(keywordList)
    useEffect(() => {
        countKeywordNum()
        getKeywordList()
    }, [isSelected])

    const countKeywordNum = () => {
        setKeywordNum(isSelected.filter((element) => true === element).length)
    }

    const getKeywordList = () => {
        const findKeywordIdxs = isSelected
            .map((item, idx) => {
                if (item === true) return idx
                else return -1
            })
            .filter((item) => item !== -1)
        setKeywordList(
            KeywordTextList.filter((element) =>
                findKeywordIdxs.includes(element.id)
            )
        )
    }

    const handleKeywordButton = (id) => {
        setSelect([
            ...isSelected.slice(0, id),
            !isSelected[id],
            ...isSelected.slice(id + 1),
        ])
    }

    return (
        <div>
            <Title
                main={"감사 키워드를 골라주세요!"}
                sub={"2~5개, 콕 집어주세요!"}
            ></Title>
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
            <LinkTo to="/step/3">
                <Button
                    disabled={!(keywordNum >= 2 && keywordNum <= 5)}
                    // onClick={handleButton}
                >
                    계속하기
                </Button>
            </LinkTo>
        </div>
    )
}
