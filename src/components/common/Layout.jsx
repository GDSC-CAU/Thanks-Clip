import { Outlet } from "react-router-dom"
import { ProgressBar } from "./ProgressBar"

const Layout = () => (
    <main className="w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-4 bg-white">
        <ProgressBar />
        <Outlet />
    </main>
)

export { Layout }
