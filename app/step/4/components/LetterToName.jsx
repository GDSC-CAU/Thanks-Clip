"use client"

import { useAtomValue } from "jotai"
import { store } from "../../../../atoms"
import { Title } from "../../../common/Title"

const LetterToName = () => {
    const letter = useAtomValue(store.letter)

    return (
        <>
            <div className="pt-10 pb-4">
                <Title
                    main="Thanks Clip 🙌"
                    sub={`${letter.to} 님을 위한 Thanks Clip이 완성되었습니다!`}
                />
            </div>
        </>
    )
}

export { LetterToName }
