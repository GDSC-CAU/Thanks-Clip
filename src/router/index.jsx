import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../components/common"
import { Error, Home, Step1, Step2, Step3, Step4 } from "../pages"

const router = createBrowserRouter([
    {
        element: <Home />,
        path: "/",
        errorElement: <Error />,
    },
    {
        path: "step",
        element: <Layout />,
        children: [
            {
                path: "1",
                element: <Step1 />,
            },
            {
                path: "2",
                element: <Step2 />,
            },
            {
                path: "3",
                element: <Step3 />,
            },
            {
                path: "4",
                element: <Step4 />,
            },
        ],
    },
])

const routes = {
    home: "/",
    stepCommon: "/step",
    step1: "/step/1",
    step2: "/step/2",
    step3: "/step/3",
    step4: "/step/4",
}

export { router, routes }
