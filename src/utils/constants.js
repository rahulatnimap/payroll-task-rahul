import React from "react"
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreLogin from "../layout/preLogin/PreLogin";
import MyTask from "../pages/Mytask/MyTask";
// const LazyMyTask = React.lazy(() => import('../pages/Mytask/MyTask'))

export const AllRoute = {
    privateRoutes : {
       MYTASK: {
           path : "/mytask",
           element: MyTask,
           pageName: "My Task",
           sidebar: {
            show: true,
            icon: AssignmentIcon
           }
        },
        MYTASK1: {
           path : "/mytask1",
           element: MyTask,
           pageName: "My Task",
           sidebar: {
            show: true,
            icon: AssignmentIcon
           }
        },
        MYTASK2: {
           path : "/mytask2",
           element: MyTask,
           pageName: "My Task",
           sidebar: {
            show: true,
            icon: AssignmentIcon
           }
        },
        MYTASK3: {
           path : "/mytask3",
           element: MyTask,
           pageName: "My Task",
           sidebar: {
            show: true,
            icon: AssignmentIcon
           }
        },
        MYTASK4: {
           path : "/mytask4",
           element: MyTask,
           pageName: "My Task",
           sidebar: {
            show: false,
            icon: AssignmentIcon
           }
        },
    }
}