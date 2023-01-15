import { NextResponse } from "next/server"
import satori from "satori"

export const config = {
    runtime: "edge",
}

const font = {
    cute: fetch(new URL("../../public/font/cute.ttf", import.meta.url)).then(
        (res) => res.arrayBuffer()
    ),
    hand: fetch(new URL("../../public/font/hand.ttf", import.meta.url)).then(
        (res) => res.arrayBuffer()
    ),
    sans: fetch(new URL("../../public/font/sans.ttf", import.meta.url)).then(
        (res) => res.arrayBuffer()
    ),
}

/**편지지를 위한 텍스트 고정폭 */
const fontWidth = 232
/**편지지를 위한 텍스트 사이즈 1.1rem */
const fontSize = 16 * 1.1

export default async function handler(middleReq) {
    const {
        nextUrl: { search },
    } = middleReq
    const urlSearchParams = new URLSearchParams(search)
    const { type, text } = Object.fromEntries(urlSearchParams.entries())

    try {
        const fontData = await font[type]

        const svgTextString = await satori(
            <div
                style={{
                    backgroundColor: "transparent",
                    fontSize: `${fontSize}px`,
                    fontFamily: '"CustomFont"',
                }}
            >
                {text}
            </div>,
            {
                width: fontWidth,
                height: fontSize,
                fonts: [
                    {
                        name: "CustomFont",
                        data: fontData,
                    },
                ],
            }
        )
        return NextResponse.json({
            svgString: svgTextString,
        })
    } catch (e) {
        return NextResponse.json({
            svg: null,
        })
    }
}
