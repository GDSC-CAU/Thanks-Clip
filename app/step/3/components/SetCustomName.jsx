"use client"

import { useEffect } from "react"
import { setCookie } from "cookies-next"
import { useAtom } from "jotai"
import { store } from "../../../../atoms"

const Input = ({ setName }) => {
    return (
        <input
            className="p-2 rounded-sm border font-medium ring-2 ring-red-300"
            onChange={(e) => {
                e.preventDefault()
                setName(e.target.value)
            }}
        />
    )
}

const setVideoProps = (videoProps) =>
    setCookie("props", JSON.stringify(videoProps))

const SetCustomName = () => {
    // name을 Props로 받아 remotion에서 name을 렌더링하는 예제
    const [name, setName] = useAtom(store.myName)
    useEffect(() => {
        setVideoProps({ name })
    }, [name])

    return (
        <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-xl font-bold">현재 이름은, {name}</h1>
            <Input setName={setName} />
        </div>
    )
}

export { SetCustomName }
