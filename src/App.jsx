import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    const plus = () => setCount((c) => c + 1)
    const minus = () => setCount((c) => c - 1)

    return (
        <>
            <h1>🔥 Final Project is here 🔥</h1>

            <button type="button" onClick={plus}>
                Plus
            </button>

            <div>Count is, {count}</div>

            <button type="button" onClick={minus}>
                Minus
            </button>
        </>
    )
}

export default App
