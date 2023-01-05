import { useState } from "react"
import PrevButton from "./PrevButton"

function App() {
    const [count, setCount] = useState(0)
    const plus = () => setCount((c) => c + 1)
    const minus = () => setCount((c) => c - 1)

    return (
        <div className="py-5 flex flex-col items-center justify-center gap-4 h-screen">
            <h1 className="text-5xl font-black mb-16">Final Project is here</h1>
            <PrevButton></PrevButton>
            <div className="text-xl font-bold">Count is {count}</div>

            <div className="flex flex-row items-center justify-center gap-4">
                <button
                    className="px-4 py-2 rounded ring-2 ring-red-200 bg-red-500 text-white active:translate-y-[1.25px]"
                    type="button"
                    onClick={minus}
                >
                    Plus
                </button>

                <button
                    className="px-4 py-2 rounded ring-2 ring-blue-200 bg-blue-500 text-white active:translate-y-[1.25px]"
                    type="button"
                    onClick={plus}
                >
                    Minus
                </button>
            </div>
        </div>
    )
}

export default App
