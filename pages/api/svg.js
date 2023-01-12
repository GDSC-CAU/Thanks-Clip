import { NextResponse } from "next/server"
import satori from "satori"

export const config = {
    runtime: "edge",
}

// Make sure the font exists in the specified path:
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

export default async function handler(Req) {
    const {
        nextUrl: { search },
    } = Req
    const urlSearchParams = new URLSearchParams(search)
    const { type, name } = Object.fromEntries(urlSearchParams.entries())

    try {
        const fontData = await font[type]

        const svg = await satori(
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    fontSize: 100,
                    fontFamily: '"CustomFont"',
                    paddingTop: "100px",
                    paddingLeft: "50px",
                }}
            >
                Hello {name}!
            </div>,
            {
                width: 500,
                height: 500,
                fonts: [
                    {
                        name: "CustomFont",
                        data: fontData,
                    },
                ],
            }
        )
        return NextResponse.json({
            svg,
        })
    } catch (e) {
        return NextResponse.json({
            svg: null,
        })
    }
}
