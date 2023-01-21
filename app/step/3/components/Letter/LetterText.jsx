/* eslint-disable @next/next/no-img-element */
"use client"
import { useAtomValue } from "jotai"
import { store } from "../../../../../atoms"

const fontList = {
    cute: "font-main-cute",
    hand: "font-main-hand",
    sans: "font-main-sans",
}

const ToString = ({ svgString, alt, height }) => (
    <img
        src={`data:image/svg+xml;utf8,${svgString}`}
        alt={alt}
        height={height}
        style={{
            height: 20,
        }}
    />
)

const LetterTextStatic = ({ from, to, letter }) => {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    lineHeight: "1.5rem",
                }}
            >
                <ToString svgString={from} alt={"from svg"} height="22%" />
            </div>
            <div
                style={{
                    lineHeight: "1.5rem",
                }}
            >
                <ToString svgString={letter} alt="letter svg" height="70%" />
            </div>
            <div
                style={{
                    alignSelf: "flex-end",
                    lineHeight: "1.5rem",
                }}
            >
                <ToString svgString={to} alt="to svg" height="11%" />
            </div>
        </div>
    )
}

const LetterTextLocation = ({ from, to, letter, font }) => {
    const fontType = fontList[font]

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
            }}
            className={fontType}
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
}

const LetterText = () => {
    const letter = useAtomValue(store.letter)

    return <LetterTextLocation {...letter} font={letter.font} />
}

export { LetterText, LetterTextStatic, LetterTextLocation }
