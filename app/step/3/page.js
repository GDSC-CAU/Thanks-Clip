import { Title } from "../../common/Title"
import { Letter } from "./components/Letter"
import { PreviewLetter } from "./components/PreviewLetter"

export default function Step3() {
    return (
        <>
            <div className="flex-1">
                <div className="py-10">
                    <Title main="편지지를 꾸며볼까요?" />
                </div>
                <Letter />
            </div>
            <div className="sticky bottom-0 pb-3 z-50">
                <PreviewLetter />
            </div>
        </>
    )
}
