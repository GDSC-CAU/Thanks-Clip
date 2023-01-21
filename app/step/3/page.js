import { Title } from "../../common/Title"
import { Letter } from "./components/Letter"
import { PreviewLetter } from "./components/PreviewLetter"

export default function Step3() {
    return (
        <>
            <div className="pt-8">
                <Title main="편지지를 꾸며볼까요?" />
            </div>
            <div className="flex justify-center">
                <Letter />
            </div>
            <PreviewLetter />
        </>
    )
}
