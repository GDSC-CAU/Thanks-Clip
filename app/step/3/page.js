import Link from "next/link"
import { Button } from "../../common/Button"
import { Title } from "../../common/Title"
// import { SetCustomName } from "./components/SetCustomName"
import { LetterEditorLayout } from "./components/LetterEditorLayout"

export default function Step3() {
    return (
        <div className="flex flex-col h-full">
            <div className="py-10">
                <Title main={"편지지를 꾸며볼까요?"} />
            </div>
            <div className="">
                <LetterEditorLayout></LetterEditorLayout>
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
{
    /* <div className="flex flex-col h-full">
            <div className="py-10">
                <Title
                    main={"감사 키워드를 골라주세요!"}
                    sub={"2~5개, 콕 집어주세요!"}
                />
            </div>
            <div className="grid grid-cols-3 gap-y-3.5 gap-x-1.5 mb-10">
                <Keyword />
            </div>
            <div className="mt-auto mb-16">
                <Link href="/step/3">
                    <Button
                    // disabled={!(keywordNum >= 2 && keywordNum <= 5)}
                    // onClick={handleButton}
                    >
                        계속하기
                    </Button>
                </Link>
            </div>
        </div> */
}

/* <div className="flex flex-col justify-between items-start h-full"> 
    <Title
        main="이름을 설정해보세요!"
        sub="remotion 비디오가 렌더링 해줍니다!"
    />

    <SetCustomName />

    <Link href="/step/4" className="w-full">
        <Button color="red" size="full">
            Clip이 완성되었어요!
        </Button>
    </Link>
// </div>*/
