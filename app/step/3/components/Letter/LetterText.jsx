"use client"
import { useAtomValue } from "jotai"
import { store } from "../../../../../atoms"

const fontList = {
    cute: "font-main-cute",
    hand: "font-main-hand",
    sans: "font-main-sans",
}

const LetterText = () => {
    const letter = useAtomValue(store.letter)
    const fontType = fontList[letter.font]

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
