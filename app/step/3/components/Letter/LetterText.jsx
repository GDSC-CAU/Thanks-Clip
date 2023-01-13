"use client"
// import { useState } from "react"
import { useAtom } from "jotai"
import { store } from "../../../../../atoms"

const LetterText = () => {
    const [letter] = useAtom(store.letter)
    const fontType = `font-main-${letter.font}`

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                className={fontType}
                style={{
                    height: "22%",
                    fontSize: "1.1rem",
                    lineHeight: "1.5rem",
                }}
            >
                To. {letter.to}
            </div>
            <div
                className={fontType}
                style={{
                    height: "70%",
                    fontSize: "1.1rem",
                    lineHeight: "1.5rem",
                }}
            >
                {letter.letter}
            </div>
            <div
                className={fontType}
                style={{
                    height: "11%",
                    textAlign: "right",
                    fontSize: "1.1rem",
                    lineHeight: "1.5rem",
                }}
            >
                From. {letter.from}
            </div>
        </div>
    )
}

export { LetterText }
