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

const imageConfig = {
    width: 220,
    scale: 4,
    fontSize: 24,
    lineHeight: 17.6,
    emoji: "twemoji",
}
const getAWSFontURL = (font) =>
    `https://thanks-clip-font.s3.ap-northeast-2.amazonaws.com/${font}.ttf`

/**
 * @param {import("next/server").NextRequest} middleReq
 */
export default async function handler(middleReq) {
    const { font, from, height, letter, to } = getLetterRenderProps(middleReq)

    const fontData = await fetch(getAWSFontURL(font)).then((res) =>
        res.arrayBuffer()
    )
    try {
        const image = new ImageResponse(
            (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: imageConfig.width * imageConfig.scale,
                        height: "100%",
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
                emoji: imageConfig.emoji,
                fonts: [
                    {
                        data: fontData,
                        name: font,
                    },
                ],
            }
        )

        return image
    } catch (e) {
        console.log(e)
        return null
    }
}
