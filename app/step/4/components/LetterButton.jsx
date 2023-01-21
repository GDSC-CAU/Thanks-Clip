"use client"

import { useSetAtom } from "jotai"
import { RESET } from "jotai/utils"
import Link from "next/link"
import { store } from "../../../../atoms"
import { Button } from "../../../common/Button"
import { KakaoShareLink } from "./KakaoShareLink"

/**
 * @param {{ urlParams: import("../../../download/page").DownloadURLParams }} downloadProps
 */
const LetterButton = ({ urlParams }) => {
    const setLetter = useSetAtom(store.letter)
    const setStickers = useSetAtom(store.stickers)

    const reset = () => {
        setLetter(RESET)
        setStickers([])
    }

    return (
        <div className="flex flex-col gap-3 pt-4">
            <KakaoShareLink urlParams={urlParams}>
                <Button className="md-1">카카오톡으로 Clip 보내기</Button>
            </KakaoShareLink>

            <Link href="/">
                <Button
                    className="bg-inherit text-gray-800 border-gray-800 border-solid border"
                    onClick={reset}
                >
                    하나 더 만들기
                </Button>
            </Link>
        </div>
    )
}

export { LetterButton }
