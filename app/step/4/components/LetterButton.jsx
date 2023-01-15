"use client"

import { useSetAtom } from "jotai"
import { RESET } from "jotai/utils"
import Link from "next/link"
import { store } from "../../../../atoms"
import { Button } from "../../../common/Button"
import { KakaoShareLink } from "./KakaoShareLink"

const LetterButton = () => {
    const setLetter = useSetAtom(store.letter)
    const setStickers = useSetAtom(store.stickers)

    const reset = () => {
        setLetter(RESET)
        setStickers([])
    }

    return (
        <div className="mb-auto pt-10">
            <KakaoShareLink urlParams={{}} onClick={reset}>
                <Button className="mb-5">카카오톡으로 Clip 보내기</Button>
            </KakaoShareLink>

            <Link href="/">
                <Button
                    className="bg-inherit text-gray-800 border-gray-800 border-solid border"
                    onClick={reset}
                >
                    한개 더 만들기
                </Button>
            </Link>
        </div>
    )
}

export { LetterButton }
