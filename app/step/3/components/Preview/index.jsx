"use client"

import { useAtomValue } from "jotai"
import Link from "next/link"
import { store } from "../../../../../atoms"
import { Button } from "../../../../common/Button"
import { Modal, useModalState } from "../../../../common/Modal"
import { LetterStaticClient } from "../Letter/LetterStatic"

const letterSize = 300

const Preview = () => {
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
                    <div
                        className="scale-110"
                        onClick={() => {
                            action.open()
                        }}
                    >
                        <LetterStaticClient {...letter} size={letterSize} />
                    </div>
                    <div className="flex flex-row w-full gap-5">
                        <Button color="gray" onClick={() => action.close()}>
                            수정하기
                        </Button>
                        <Link href="/step/4" className="w-full">
                            <Button>Clip</Button>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export { Preview }
