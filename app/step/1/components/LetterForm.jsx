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
                <div className="flex flex-col h-full justify-between gap-10">
                    <label className="mt-14">
                        <Title
                            main="감사 편지를 적어볼까요?"
                            sub={`Thanks to ${letter.to}!`}
                        />
                    </label>

                    <div className="flex flex-col gap-24 md:gap-32">
                        <Textarea
                            onChange={setLetterText}
                            value={letter.letter ?? ""}
                        />
                        <Link href="/step/2">
                            <Button className="mb-2" disabled={!letter.letter}>
                                키워드 선택하러 가기
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col mt-28">
                        <label className={titleStyle}>From</label>
                        <Input
                            value={letter.from ?? ""}
                            onChange={setFromText}
                        />
                    </div>

                    <div className="flex flex-col mt-28">
                        <label className={titleStyle}>Thanks to!</label>
                        <Input value={letter.to ?? ""} onChange={setToText} />
                    </div>

                    <Button
                        onClick={() => setIsFilled(true)}
                        disabled={!letter.from || !letter.to}
                        className="mt-auto mb-2"
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
