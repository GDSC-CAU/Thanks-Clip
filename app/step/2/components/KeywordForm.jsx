"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "../../../common/Button"
import { Title } from "../../../common/Title"
import { Keyword } from "./Keyword"

const KeywordForm = () => {
    const [keywordNum, setKeywordNum] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const getKeywordNum = (x) => {
        setIsDisabled(!(x >= 2 && x <= 5))
    }

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <div className="pt-8 pb-3">
                    <Title
                        main={"감사 키워드를 골라주세요!"}
                        sub={"2~5개, 콕 집어주세요!"}
                    />
                </div>
                <div className="grid grid-cols-3 gap-y-2 gap-x-1.5 break-words ">
                    <Keyword
                        keywordNum={keywordNum}
                        setKeywordNum={setKeywordNum}
                        getKeywordNum={getKeywordNum}
                    />
                </div>
            </div>

            <Link href="/step/3" className="mt-auto">
                <Button disabled={isDisabled}>
                    {keywordNum === 0 && "키워드를 골라볼까요?"}
                    {keywordNum === 1 && "키워드를 더 선택해보아요"}
                    {keywordNum >= 2 && keywordNum <= 5 && "편지 만들러 가보기"}
                </Button>
            </Link>
        </div>
    )
}

export { KeywordForm }
