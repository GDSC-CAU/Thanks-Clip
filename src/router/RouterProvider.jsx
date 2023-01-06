import { useEffect } from "react"
import { RouterProvider as RRDRouterProvider } from "react-router-dom"
import { router, routes } from "./config"

const RouterProvider = (props) => {
    useEffect(() => {
        const shouldReplaceInvalidAccess =
            window.location.pathname === routes.stepCommon

        if (shouldReplaceInvalidAccess) {
            window.location.replace(routes.home)
        }
    }, [])

    return (
        <RRDRouterProvider router={router}>{props.children}</RRDRouterProvider>
    )
}

export { RouterProvider }
