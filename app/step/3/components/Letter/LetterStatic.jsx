import { StickersStatic } from "./Editor/Stickers/StickerManager"
import { LetterCanvas } from "./LetterCanvas"
import { LetterShapeStatic } from "./LetterShape"
import { LetterTextLocation, LetterTextStatic } from "./LetterText"

/**@typedef {import("../../../../../atoms/sticker").Sticker} Sticker */

/**
 * Letter를 client에서 정적으로 표현하는 컴포넌트
 * @param {{size: number, from: string, to: string, letter: string, stickers: Sticker[], letterType: "hole" | "overlap" | "torn", font: "cute" | "sans" | "hand", backgroundColor: "white" | "ivory" | "red" | "yellow" | "blue" }} clientProps
 */
const LetterStaticClient = ({
    size = 300,
    from,
    to,
    letter,
    letterType,
    font,
    stickers,
    backgroundColor,
}) => {
    return (
        <LetterCanvas size={size}>
            <LetterShapeStatic
                backgroundColor={backgroundColor}
                type={letterType}
            >
                <LetterTextLocation
                    font={font}
                    from={from}
                    letter={letter}
                    to={to}
                />
            </LetterShapeStatic>

            <StickersStatic size={size} stickers={stickers} />
        </LetterCanvas>
    )
}

/**
 * Letter를 server에서 정적으로 표현하는 컴포넌트
 * @param {{size: number, from: string, to, string, letter, string, stickers: Sticker[], type: "hole" | "overlap" | "torn" }} serverProps
 */
const LetterStaticServer = ({
    size,
    from: fromSvgString,
    to: toSvgString,
    letter: letterSvgString,
    type,
    stickers,
    backgroundColor,
}) => {
    return (
        <LetterCanvas size={size}>
            <LetterShapeStatic color={backgroundColor} type={type}>
                <LetterTextStatic
                    from={fromSvgString}
                    letter={letterSvgString}
                    to={toSvgString}
                />
            </LetterShapeStatic>

            <StickersStatic size={size} stickers={stickers} />
        </LetterCanvas>
    )
}

export { LetterStaticClient, LetterStaticServer }
