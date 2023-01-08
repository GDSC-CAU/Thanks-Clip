import { Outlet, useLocation } from "react-router-dom"
import { PrevButton } from "./PrevButton"
import { ProgressBar } from "./ProgressBar"

const Nav = () => {
    const step = useLocation().pathname.split("/").slice(-1)[0]
    return (
        <div className="flex flex-col items-start justify-center gap-1">
            <PrevButton step={Number(step)} />
            <ProgressBar step={step} />
        </div>
    )
}

const Layout = () => {
    return (
        <main className="w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white">
            <Nav />
            <Outlet />
        </main>
    )
}

export { Layout }
