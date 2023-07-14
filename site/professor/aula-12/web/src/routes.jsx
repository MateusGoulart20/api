import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Foods } from "./pages/Foods";

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/foods" element={<Foods />} />
            </Routes>
        </BrowserRouter>
    )
}
