import importFont from "@next/font/local"

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
        <html
            className={`${fontCute.variable} ${fontHand.variable} ${fontSans.variable}`}
        >
            <head />
            <body className="bg-gray-100">{children}</body>
        </html>
    )
}
