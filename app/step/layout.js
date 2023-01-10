import { Nav } from "../common/Nav"

// https://local/step/하위에_있는_모든_경로

export default function StepLayout({ children }) {
    return (
        <main className="flex flex-col w-full h-screen min-h-screen mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 px-3 py-3 bg-white">
            <Nav />
            <div className="h-full">{children}</div>
        </main>
    )
}
