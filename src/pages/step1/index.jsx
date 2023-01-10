import { useState } from "react"
import { Button } from "../../components/common/Button"
import { LinkTo } from "../../components/common/LinkTo"
import { Input } from "../../components/pages/step1/Input"
import { Textarea } from "../../components/pages/step1/Textarea"

export default function Step1() {
    const [isFilled, setIsFilled] = useState(false)
    return (
        <div>
            {isFilled ? (
                <div>
                    <Textarea initialValue={""} />
                    <LinkTo to="/step/2">
                        <Button>계속하기</Button>
                    </LinkTo>
                </div>
            ) : (
                <div>
                    <Input initialValue={""} />
                    <Button onClick={() => setIsFilled(true)}>계속하기</Button>
                </div>
            )}
        </div>
    )
}
