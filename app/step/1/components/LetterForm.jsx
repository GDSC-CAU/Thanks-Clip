"use client"

import { useState } from "react"
import { useAtom } from "jotai"
import Link from "next/link"
import { store } from "../../../../atoms"
import { Button } from "../../../common/Button"
import { Title } from "../../../common/Title"
import { Input } from "./Input"
import { Textarea } from "./Textarea"

const titleStyle = "text-xl text-black font-bold mb-4 select-none"

const LetterForm = () => {
    const [letter, setLetter] = useAtom(store.letter)
    const [isFromToFilled, setIsFilled] = useState(false)

    const setFromText = (e) => {
        setLetter((letter) => ({ ...letter, from: e.target.value }))
    }
    const setToText = (e) => {
        setLetter((letter) => ({ ...letter, to: e.target.value }))
    }
    const setLetterText = (e) => {
        setLetter((letter) => ({ ...letter, letter: e.target.value }))
    }

    return (
        <>
            {isFromToFilled ? (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col h-full">
                        <label className="pt-8 pb-4">
                            <Title
                                main="감사 편지를 적어볼까요?"
                                sub={`Thanks to ${letter.to}!`}
                            />
                        </label>

                        <div className="flex flex-col">
                            <Textarea
                                onChange={setLetterText}
                                value={letter.letter ?? ""}
                            />
                        </div>
                    </div>

                    <Link href="/step/2">
                        <Button disabled={!letter.letter}>
                            키워드 선택하러 가기
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex-1 flex flex-col pt-10">
                        <div className="flex flex-col">
                            <label className={titleStyle}>From</label>
                            <Input
                                value={letter.from ?? ""}
                                onChange={setFromText}
                            />
                        </div>
                        <div className="h-12"></div>
                        <div className="flex flex-col">
                            <label className={titleStyle}>Thanks to!</label>
                            <Input
                                value={letter.to ?? ""}
                                onChange={setToText}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={() => setIsFilled(true)}
                        disabled={!letter.from || !letter.to}
                    >
                        {!letter.from && !letter.to && "먼저 이름을 적어보아요"}
                        {letter.from && !letter.to && "이름을 적어보아요"}
                        {!letter.from &&
                            letter.to &&
                            "받는 분의 이름을 적어보아요"}
                        {letter.from && letter.to && "편지를 적어볼까요?"}
                    </Button>
                </div>
            )}
        </>
    )
}

export { LetterForm }
