import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./home"





export const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </BrowserRouter>
    )
}