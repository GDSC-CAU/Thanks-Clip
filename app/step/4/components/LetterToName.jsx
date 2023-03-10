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
                    main="Thanks Clip π"
                    sub={`${letter.to} λμ μν Thanks Clipμ΄ μμ±λμμ΅λλ€!`}
                />
            </div>
        </>
    )
}

export { LetterToName }
