import Link from "next/link"
import { Button } from "../../common/Button"
import { Title } from "../../common/Title"
import { Keyword } from "./components/Keyword"

export default function Step2() {
    return (
        <div className="flex flex-col h-full">
            <div className="py-10">
                <Title
                    main={"감사 키워드를 골라주세요!"}
                    sub={"2~5개, 콕 집어주세요!"}
                />
            </div>
            <div className="grid grid-cols-3 gap-y-3.5 gap-x-1.5 mb-10">
                <Keyword />
            </div>
            <div className="mt-auto mb-5">
                <Link href="/step/3">
                    <Button
                    // disabled={!(keywordNum >= 2 && keywordNum <= 5)}
                    // onClick={handleButton}
                    >
                        계속하기
                    </Button>
                </Link>
            </div>
        </div>
    )
}
