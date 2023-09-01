import Home from './pages/Home/PrimeiraParte/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default router