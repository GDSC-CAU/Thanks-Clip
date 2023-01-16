import { Title } from "../../common/Title"
import { Letter } from "./components/Letter"
import { PreviewLetter } from "./components/PreviewLetter"

export default function Step3() {
    return (
        <>
            <div className="py-10">
                <Title main="편지지를 꾸며볼까요?" />
            </div>

            <Letter />

            <div className="mt-auto mb-5">
                <PreviewLetter />
            </div>
        </>
    )
}
