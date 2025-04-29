import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./home"
import Layout from "./Layout"





export const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            </Route>
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </BrowserRouter>
    )
}