import { LetterButton } from "./components/LetterButton"
import { LetterToName } from "./components/LetterToName"

export default async function Step4() {
    return (
        <>
            <LetterToName />
            <LetterButton />
        </>
    )
}
