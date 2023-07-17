import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Foods } from "./pages/Foods";

const isAuthenticated = () => {
    const acessToken = sessionStorage.getItem('token');
    return acessToken;
}
function PrivateRoute({children}) {
    if (!isAuthenticated()){
        return <Navigate to="/" replace />
    }
    return children
}

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                    path="/foods" 
                    element={
                        <PrivateRoute>
                            <Foods />
                        </PrivateRoute>    
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}
