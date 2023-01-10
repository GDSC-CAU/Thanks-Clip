import { Button, Modal, useModalState } from "../../components/common"

export default function Step1() {
    const { isClose, action } = useModalState()

    return (
        <>
            <Button onClick={action.toggle} color="white" size="full">
                {isClose ? "open" : "close"}
            </Button>

            {/* Test용 Modal */}
            <Modal isClose={isClose} onClose={action.close}>
                <div className="w-2/3 flex flex-col items-start justify-center gap-4 p-4 rounded bg-white shadow-xl">
                    <div className="text-xl font-bold">Step1</div>
                    <p>오늘의 모달 창을 열어보았습니다!</p>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <Button color="white" size="fit">
                            내보내기
                        </Button>
                        <Button onClick={action.close} color="red" size="fit">
                            닫기
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
