"use client"
// import { useState } from "react"
import { useAtom } from "jotai"
import { store } from "../../../../../atoms"

const LetterText = () => {
    const [letter] = useAtom(store.letter)
    const fontType = `font-main-${letter.font}`

    return (
        <div>
            <div className={fontType}>To. {letter.to}</div>
            <div className={fontType}>{letter.letter}</div>
            <div className={fontType}>From. {letter.from}</div>
        </div>
    )
}

export { LetterText }
