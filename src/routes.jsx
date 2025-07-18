import { createBrowserRouter, Navigate } from "react-router-dom"
import React from "react"
import PreLogin from "./layout/preLogin/PreLogin.jsx"
import PublicRoutes from "./routes/PublicRoutes.jsx"
import PrivateRoutes from "./routes/PrivateRoutes.jsx"
import { AllRoute } from "./utils/constants.js"
import Dashboard from "./pages/Dashboard.jsx"
const LazyLogin = React.lazy(() => import('./pages/Login/Login.jsx'))
const LazyPostLogin = React.lazy(() => import('./layout/postLogin/PostLogin.jsx'))

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
    },
    {
        element: <PrivateRoutes component={<LazyPostLogin />}></PrivateRoutes>,
        children: [
            ...Object.values(AllRoute.privateRoutes).map(Pages => ({
                path: Pages?.path,
                element: <Pages.element />
            })),
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    }
])