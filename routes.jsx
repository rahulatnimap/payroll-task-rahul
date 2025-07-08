    import { createBrowserRouter, Navigate } from "react-router-dom"
    import React from "react"
    import PreLogin from "./src/layout/preLogin/PreLogin.jsx"
    import PublicRoutes from "./src/routes/PublicRoutes.jsx"
    import PrivateRoutes from "./src/routes/PrivateRoutes.jsx"
    import MyTask from "./src/pages/Mytask/MyTask.jsx"
    const LazyLogin = React.lazy(() => import('./src/pages/Login/Login.jsx'))
    const LazyPostLogin = React.lazy(() => import('./src/layout/postLogin/PostLogin.jsx'))

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
            element: <PrivateRoutes component={<LazyPostLogin/>}></PrivateRoutes>,
            children: [
            {
                path : "/mytask",
                element: <MyTask/>
            },
            ]
        }
    ])