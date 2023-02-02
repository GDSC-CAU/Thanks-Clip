/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ImageResponse } from "@vercel/og"
import { getSearchParams } from "../../utils/params"

export const config = {
    runtime: "edge",
}

/**
 * ```ts
 * // 예시 요청 URL
 * const URL = `/api/image?font=cute&from=june&to=me&letter=안녕&lettertype=torn`
 * ```
 * @param {import("next/server").NextRequest} middleReq
 */
const getLetterServerRenderProps = (middleReq) => {
    const {
        nextUrl: { search },
    } = middleReq
    const { font, from, letter, letterType, to } = getSearchParams({
        params: search,
        search: ["font", "from", "to", "letter", "letterType"],
        type: "server",
    })

    const calculateHeight = () => {
        if (letterType === "torn") return 216
        if (letterType === "overlap") return 220
        if (letterType === "hole") return 232
        return 220
    }

    return {
        to: `To. ${to}`,
        from: `From. ${from}`,
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
/**
 * @note `AWS s3`에서 호스팅 되고 있는 폰트를 가져옵니다
 * @example
 * ```bash
 * # Font 호스팅 s3 bucket 주소
 * AWS_FONT=https://aws...
 * ```
 * @param {"cute" | "hand" | "sans"} font
 */
const getAWSFontURL = (font) => `${process.env.AWS_FONT}/${font}.ttf`

/**
 * @param {import("next/server").NextRequest} middleReq
 */
export default async function handler(middleReq) {
    const { font, from, height, letter, to } =
        getLetterServerRenderProps(middleReq)

    try {
        const fontDataFromS3 = await fetch(getAWSFontURL(font)).then((res) =>
            res.arrayBuffer()
        )

        const letterTextImage = new ImageResponse(
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
                        fontFamily: `"${font}"`,
                        color: "black",
                    }}
                >
                    <div
                        style={{
                            height: "22%",
                            lineHeight: `${
                                imageConfig.fontSize * imageConfig.scale
                            }px`,
                        }}
                    >
                        {to}
                    </div>
                    <div
                        style={{
                            height: "61%",
                            lineHeight: `${
                                imageConfig.fontSize * imageConfig.scale
                            }px`,
                        }}
                    >
                        {letter}
                    </div>
                    <div
                        style={{
                            height: "11%",
                            lineHeight: `${
                                imageConfig.fontSize * imageConfig.scale
                            }px`,
                            alignSelf: "flex-end",
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
                        data: fontDataFromS3,
                        name: font,
                    },
                ],
            }
        )

        return letterTextImage
    } catch (e) {
        throw new Error(e)
    }
}
