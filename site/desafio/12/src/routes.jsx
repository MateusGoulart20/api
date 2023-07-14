import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { Home } from './pages/Home';
import { Read } from './pages/Read';
import { Update } from './pages/Update';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Foods } from "./pages/Foods";

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route path='/read' element={<Read />} />
                <Route path='/update' element={<Update />} />
                <Route path="/register" element={<Register />} />
                <Route path="/foods" element={<Foods />} />
            </Routes>
        </BrowserRouter>
    );
}
