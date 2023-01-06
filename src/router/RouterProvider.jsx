import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { router, routes } from "./config"

const Router = (props) => {
    useEffect(() => {
        const shouldReplaceInvalidAccess =
            window.location.pathname === routes.stepCommon

        if (shouldReplaceInvalidAccess) {
            window.location.replace(routes.home)
        }
    }, [])

    return <RouterProvider router={router}>{props.children}</RouterProvider>
}

export { Router }
