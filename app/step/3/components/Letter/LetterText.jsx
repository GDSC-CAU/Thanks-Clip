"use client"
// import { useState } from "react"
import { useAtom } from "jotai"
import { store } from "../../../../../atoms"

const LetterText = () => {
    const [letter] = useAtom(store.letter)
    const to = letter.to
    const from = letter.from
    const letterText = letter.letter
    return (
        <div>
            <div>{to}</div>
            <div>{from}</div>
            <div>{letterText}</div>
        </div>
    )
}

export { LetterText }
