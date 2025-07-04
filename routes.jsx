import { createBrowserRouter, Navigate } from "react-router-dom"
import React from "react"
import PreLogin from "./src/layout/preLogin/PreLogin.jsx"
import PublicRoutes from "./src/routes/PublicRoutes.jsx"
const LazyLogin = React.lazy(() => import('./src/pages/Login/Login.jsx'))
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/login'} replace />,
    },
    {
        element: <PublicRoutes component={<PreLogin />}></PublicRoutes>,
        children: [
            {
                path: '/login',
                element: <LazyLogin />
            }
        ]
    }
])