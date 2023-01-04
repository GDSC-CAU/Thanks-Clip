import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import Home from "./pages/Home"
import Step1 from "./pages/Step1"
import Step2 from "./pages/Step2"
import Step3 from "./pages/Step3"
import Step4 from "./pages/Step4"
import Step5 from "./pages/Step5"

const routes = {
    home: "/",
    step1: "/step1",
    step2: "/step2",
    step3: "/step3",
    step4: "/step4",
    step5: "/step5",
}

export { routes }

function App() {
    return (
        <>
            <Header></Header>
            <ProgressBar></ProgressBar>
            <BrowserRouter>
                <Routes>
                    <Route exact path={routes.home} element={<Home />} />
                    <Route path={routes.step1} element={<Step1 />} />
                    <Route path={routes.step2} element={<Step2 />} />
                    <Route path={routes.step3} element={<Step3 />} />
                    <Route path={routes.step4} element={<Step4 />} />
                    <Route path={routes.step5} element={<Step5 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
