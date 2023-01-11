import Link from "next/link"
import { Button } from "../../common/Button"
import { Title } from "../../common/Title"
import { Letter } from "./components/Letter"

export default function Step3() {
    return (
        <>
            <div className="py-10">
                <Title main="편지지를 꾸며볼까요?" />
            </div>

            <Letter />

            <div className="mt-auto mb-5">
                <Link href="/step/4">
                    <Button>계속하기</Button>
                </Link>
            </div>
        </>
    )
}
