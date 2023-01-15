"use client"

import { useAtomValue } from "jotai"
import { store } from "../../atoms"

const DownloadTitle = () => {
    const letter = useAtomValue(store.letter)

    return (
        <div className="py-10 flex justify-center">
            <div className="flex flex-col justify-center gap-2  font-main-cute ">
                <h1 className="flex justify-center text-4xl text-black font-bold">
                    <span className="text-red-500">{letter.from}</span>님의
                    마음이 담긴
                </h1>
                <h1 className="flex justify-center text-4xl text-black font-bold">
                    Thansk Clip
                </h1>
                <h3 className="flex justify-center text-xl text-gray-400 pt-2">
                    편지 내용을 확인해보세요 💌
                </h3>
            </div>
        </div>
    )
}

export { DownloadTitle }
