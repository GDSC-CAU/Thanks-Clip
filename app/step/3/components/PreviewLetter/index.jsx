"use client"

import { useAtomValue } from "jotai"
import Link from "next/link"
import { store } from "../../../../../atoms"
import { COOKIE_KEY, setPropsOnCookie } from "../../../../../constant/cookie"
import { Button } from "../../../../common/Button"
import { Modal, useModalState } from "../../../../common/Modal"
import { LetterStaticClient } from "../Letter/LetterStatic"

const letterSize = 300

const PreviewLetter = () => {
    const { action, isClose } = useModalState()
    const letter = useAtomValue(store.letter)

    return (
        <>
            <Button onClick={() => action.open()}>계속하기</Button>
            <Modal
                isClose={isClose}
                opacity="50"
                onClose={() => {
                    action.close()
                }}
            >
                <div className="w-[330px] flex flex-col items-center justify-center gap-10">
                    <div className="scale-110">
                        <LetterStaticClient {...letter} size={letterSize} />
                    </div>
                    <div className="grid grid-cols-2 w-full gap-5">
                        <Button color="gray" onClick={() => action.close()}>
                            수정하기
                        </Button>

                        <Link href="/step/4">
                            <Button
                                onClick={() => {
                                    setPropsOnCookie(COOKIE_KEY, letter)
                                }}
                            >
                                Clip
                            </Button>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export { PreviewLetter }
