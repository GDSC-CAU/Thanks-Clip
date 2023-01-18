/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ImageResponse } from "@vercel/og"

export const config = {
    runtime: "edge",
}

/**
 * 예시 요청
 * `/api/image?font=cute&from=june&to=me&letter=안녕&lettertype=torn`
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

const cuteFont = fetch(
    new URL("../../public/font/cute.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const handFont = fetch(
    new URL("../../public/font/hand.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const sansFont = fetch(
    new URL("../../public/font/sans.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const imageConfig = {
    width: 220,
    scale: 4,
    fontSize: 24,
    lineHeight: 17.6,
    emoji: "twemoji",
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

        const fontOption = () => {
            switch (font) {
                case "cute":
                    return {
                        name: font,
                        data: cute,
                    }
                case "hand":
                    return {
                        name: font,
                        data: hand,
                    }
                case "sans":
                    return {
                        name: font,
                        data: sans,
                    }
                default:
                    return {
                        name: "sans",
                        data: sans,
                    }
            }
        }

        const image = new ImageResponse(
            (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: imageConfig.width * imageConfig.scale,
                        height: `${100}%`,
                        backgroundColor: "transparent",
                        fontSize: `${
                            imageConfig.lineHeight * imageConfig.scale
                        }px`,
                    }}
                >
                    <div
                        style={{
                            height: "22%",
                            fontFamily: `"${font}"`,
                            lineHeight: `${
                                imageConfig.fontSize * imageConfig.scale
                            }px`,
                            backgroundColor: "transparent",
                        }}
                    >
                        {to}
                    </div>
                    <div
                        style={{
                            height: "61%",
                            fontFamily: `"${font}"`,
                            lineHeight: `${
                                imageConfig.fontSize * imageConfig.scale
                            }px`,
                            backgroundColor: "transparent",
                        }}
                    >
                        {letter}
                    </div>
                    <div
                        style={{
                            height: "11%",
                            fontFamily: `"${font}"`,
                            lineHeight: `${
                                imageConfig.fontSize * imageConfig.scale
                            }px`,
                            alignSelf: "flex-end",
                            backgroundColor: "transparent",
                        }}
                    >
                        {from}
                    </div>
                </div>
            ),
            {
                width: imageConfig.width * imageConfig.scale,
                height: height * imageConfig.scale,
                fonts: [fontOption()],
                emoji: imageConfig.emoji,
            }
        )

        return image
    } catch (e) {
        console.log(e)
        return null
    }
}
