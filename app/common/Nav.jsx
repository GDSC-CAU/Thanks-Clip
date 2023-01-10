"use client"

import { useEffect, useState } from "react"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"

const PrevButton = ({ step }) => {
    const prev = step === 1 ? "/" : `/step/${step - 1}`

    return (
        <Link href={prev}>
            <button type="button">
                <ChevronLeftIcon className="h-10 w-10 -ml-3" />
            </button>
        </Link>
    )
}

const progressBarWidth = {
    1: "w-1/4",
    2: "w-2/4",
    3: "w-3/4",
    4: "w-full",
}

const ProgressBar = ({ step }) => {
    return (
        <div className="w-full h-1 bg-gray-200 rounded-full">
            <div
                className={`transition-all duration-300 h-full bg-red-400 rounded-full ${progressBarWidth[step]}`}
            />
        </div>
    )
}

const useCurrentStep = () => {
    const path = usePathname()
    const [step, setStep] = useState(1)
    useEffect(() => {
        const split = path.split("/")
        const isValid =
            split.length === 3 && Number(split[2]) >= 1 && Number(split[2]) <= 4

        const pageStep = isValid ? Number(split[2]) : 1
        setStep(pageStep)
    }, [path])

    return {
        step,
    }
}

const Nav = () => {
    const { step } = useCurrentStep()
    return (
        <div className="flex flex-col items-start justify-center gap-1 w-full">
            <PrevButton step={step} />
            <ProgressBar step={step} />
        </div>
    )
}

export { Nav }
