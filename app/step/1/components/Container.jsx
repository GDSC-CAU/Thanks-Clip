"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../../../common/Button"
import { Input } from "./Input"
import { Textarea } from "./Textarea"

const Container = () => {
    const titleStyle = "text-xl text-black font-bold mb-4"

    const [isFilled, setIsFilled] = useState(false)
    const [sender, setSender] = useState("")
    const [recipient, setRecipient] = useState("")
    const [textarea, setTextarea] = useState("")

    const onSender = (e) => {
        setSender(e.target.value)
    }
    const onRecipent = (e) => {
        setRecipient(e.target.value)
    }
    const onTextarea = (e) => {
        setTextarea(e.target.value)
    }

    return (
        <div className="h-full">
            {isFilled ? (
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col  mt-28">
                        <label className={titleStyle}>
                            감사 편지를 적어볼까요?
                        </label>
                        <Textarea onChange={onTextarea}>{textarea}</Textarea>
                    </div>
                    <div className="mb-16">
                        <Link href="/step/2">
                            <Button disabled={textarea === ""}>계속하기</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="flex flex-col mt-28">
                            <label className={titleStyle}>From</label>
                            <Input value={sender} onChange={onSender} />
                        </div>
                        <div className="flex flex-col mt-28">
                            <label className={titleStyle}>Thanks to!</label>
                            <Input value={recipient} onChange={onRecipent} />
                        </div>
                    </div>
                    <div className="mt-auto mb-16">
                        <Button
                            onClick={() => setIsFilled(true)}
                            disabled={!(sender !== "" && recipient !== "")}
                        >
                            계속하기
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export { Container }
