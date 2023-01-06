import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { router, routes } from "./router"

const AppContainer = (props) => (
    <div className="bg-gray-50">{props.children}</div>
)

const App = (props) => {
    useEffect(() => {
        const shouldReplaceInvalidAccess =
            window.location.pathname === routes.stepCommon

        if (shouldReplaceInvalidAccess) {
            window.location.replace(routes.home)
        }
    }, [])

    return (
        <AppContainer>
            <RouterProvider router={router}>{props.children}</RouterProvider>
        </AppContainer>
    )
}

export { App }
