import { useMemo, useState } from "react"

const modalOpacity = {
    0: "opacity-0",
    25: "opacity-25",
    50: "opacity-50",
    75: "opacity-75",
}
const modalWidth = "w-full sm:w-4/5 md:w-3/5 lg:w-2/5 "

/**
 * @param {{children: React.ReactNode, isClose: boolean, onClose: (close?: boolean) => void, opacity: "0" | "25" | "50" | "75"}} props
 */
const Modal = ({ children, isClose, onClose, opacity = "25" }) => {
    return (
        <div
            className={`w-full ${
                isClose ? "pointer-events-none" : "pointer-events-auto"
            }`}
        >
            <div
                className={`flex items-center justify-center ${modalWidth} z-[100] fixed top-1/2 left-1/2 translate-x-[-50%] transition-modal duration-300 transform-gpu ${
                    isClose
                        ? "opacity-0 scale-75 translate-y-[-40%]"
                        : "opacity-100 scale-100 translate-y-[-50%]"
                }`}
            >
                {children}
            </div>

            <div
                onClick={onClose}
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black transition-opacity transform-gpu z-50 ${
                    isClose ? "opacity-0" : modalOpacity[opacity]
                }`}
            />
        </div>
    )
}

/**
 * 모달의 `open` 상태를 관리할 때 사용합니다
 */
const useModalState = () => {
    const [isModalClose, setIsModalClose] = useState(true)

    const modalAction = useMemo(
        () => ({
            toggle: () => setIsModalClose((isModalClose) => !isModalClose),
            open: () => setIsModalClose(false),
            close: () => setIsModalClose(true),
        }),
        []
    )

    return {
        isClose: isModalClose,
        action: modalAction,
    }
}

export { Modal, useModalState }
