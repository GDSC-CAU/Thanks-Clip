import Link from "next/link"
import { Button } from "./common/Button"

export default function Main() {
    return (
        <main className="flex flex-col w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white">
            <div className="flex flex-col h-full justify-between">
                <Link href="/step/1">
                    <Button className="mt-1 mb-12">시작해볼까요?</Button>
                </Link>
            </div>
        </main>
    )
}
