/* eslint-disable no-console */
import { NextResponse } from "next/server"
import satori from "satori"

export const config = {
    runtime: "edge",
}

const cuteFont = fetch(
    new URL("../../public/font/cute.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const handFont = fetch(
    new URL("../../public/font/hand.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const sansFont = fetch(
    new URL("../../public/font/sans.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

/**
 * 예시 요청
 * `/api/svg?font=cute&from=june&to=me&letter=안녕&lettertype=torn`
 * @param {import("next/server").NextRequest} middleReq
 */
const getLetterRenderProps = (middleReq) => {
    const {
        nextUrl: { search },
    } = middleReq
    const urlSearchParams = new URLSearchParams(search)

    const font = urlSearchParams.get("font")
    const from = `From. ${urlSearchParams.get("from")}`
    const to = `To. ${urlSearchParams.get("to")}`
    const letter = urlSearchParams.get("letter")
    const letterType = urlSearchParams.get("lettertype")

    const calculateHeight = () => {
        if (letterType === "torn") return 216
        if (letterType === "overlap") return 220
        if (letterType === "hole") return 232
        return 220
    }

    return {
        to,
        from,
        letter,
        font,
        height: calculateHeight(),
    }
}

/**
 * @param {import("next/server").NextRequest} middleReq
 */
export default async function handler(middleReq) {
    const { font, from, height, letter, to } = getLetterRenderProps(middleReq)

    try {
        const cute = await cuteFont
        const sans = await sansFont
        const hand = await handFont

        const svgTextString = await satori(
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: `${height}px`,
                    width: "220px",
                    backgroundColor: "transparent",
                    fontSize: "17.6px",
                }}
            >
                <div
                    style={{
                        height: "22%",
                        fontFamily: `"${font}"`,
                        lineHeight: "24px",
                    }}
                >
                    {to}
                </div>
                <div
                    style={{
                        height: "61%",
                        fontFamily: `"${font}"`,
                        lineHeight: "24px",
                    }}
                >
                    {letter}
                </div>
                <div
                    style={{
                        height: "11%",
                        fontFamily: `"${font}"`,
                        lineHeight: "24px",
                        textAlign: "right",
                        alignSelf: "flex-end",
                    }}
                >
                    {from}
                </div>
            </div>,
            {
                width: 220,
                height,
                fonts: [
                    {
                        name: "cute",
                        data: cute,
                    },
                    {
                        name: "sans",
                        data: sans,
                    },
                    {
                        name: "hand",
                        data: hand,
                    },
                ],
            }
        )

        return NextResponse.json({
            svg: svgTextString,
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            svg: null,
        })
    }
}
