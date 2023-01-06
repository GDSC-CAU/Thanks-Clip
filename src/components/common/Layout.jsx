import { Outlet } from "react-router-dom"

const Layout = () => (
    <main className="w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-4 bg-white">
        <Outlet />
    </main>
)

export { Layout }
