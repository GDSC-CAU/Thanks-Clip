"use client"
import { useAtomValue } from "jotai"
import { store } from "../../../../../atoms"

const fontList = {
    cute: "font-main-cute",
    hand: "font-main-hand",
    sans: "font-main-sans",
}

const LetterTextStatic = ({ from, to, letter, className = "" }) => (
    <div
        style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}
        className={className}
    >
        <div
            style={{
                height: "22%",
                fontSize: "1.1rem",
                lineHeight: "1.5rem",
            }}
        >
            To. {to}
        </div>
        <div
            style={{
                height: "70%",
                fontSize: "1.1rem",
                lineHeight: "1.5rem",
            }}
        >
            {letter}
        </div>
        <div
            style={{
                height: "11%",
                textAlign: "right",
                fontSize: "1.1rem",
                lineHeight: "1.5rem",
            }}
        >
            From. {from}
        </div>
    </div>
)

const LetterText = () => {
    const letter = useAtomValue(store.letter)
    const fontType = fontList[letter.font]

    return <LetterTextStatic {...letter} className={fontType} />
}

export { LetterText, LetterTextStatic }
