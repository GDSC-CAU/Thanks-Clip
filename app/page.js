import Image from "next/image"
import Link from "next/link"
import { Button } from "./common/Button"
import "./logo.css"

export default function Main() {
    return (
        <main className="flex flex-col w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white">
            <div className="flex flex-col h-full justify-between">
                <Image
                    className="my-6 relative"
                    src={"/logo/2line.svg"}
                    alt="logo_title"
                    width={500}
                    height={500}
                />
                <Image
                    className="logo"
                    src={"/logo/white.png"}
                    alt="logo_title"
                    width={63}
                    height={63}
                />
                <div className={`flex flex-col gap-1.5 font-main-Sans`}>
                    <div className="flex justify-center text-2xl font-bold ">
                        Send your&nbsp;
                        <span className={`text-red-400`}>Thanks</span>
                    </div>
                    <div className="flex justify-center text-neutral-400">
                        편지를 통해 감사한 마음을 전해 보세요
                    </div>
                </div>
                <Link href="/step/1">
                    <Button className="mt-1 mb-12">시작해볼까요?</Button>
                </Link>
            </div>
        </main>
    )
}
