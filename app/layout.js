import importFont from "@next/font/local"
import Script from "next/script"

import "./index.css"

const fontCute = importFont({
    src: "../public/font/cute.ttf",
    variable: "--font-main-cute",
})
const fontHand = importFont({
    src: "../public/font/hand.ttf",
    variable: "--font-main-hand",
})
const fontSans = importFont({
    src: "../public/font/sans.ttf",
    variable: "--font-main-sans",
})

export default function RootLayout({ children }) {
    return (
        <>
            <html
                className={`${fontCute.variable} ${fontHand.variable} ${fontSans.variable} h-full`}
            >
                <head />
                <body className="bg-white h-full">{children}</body>

                <Script
                    strategy="lazyOnload"
                    src="https://developers.kakao.com/sdk/js/kakao.js"
                />
            </html>
        </>
    )
}
