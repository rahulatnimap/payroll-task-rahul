import React from "react"
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import MyTask from "../pages/Mytask/MyTask";
import Dashboard from "../pages/Dashboard";
import MyTeam from "../pages/MyTeam";
import Billing from "../pages/Billing";
import Setting from "../pages/Setting";
const LazyMyTask = React.lazy(() => import('../pages/Mytask/MyTask'))
const LazyDashboard = React.lazy(() => import('../pages/Dashboard'))
const LazyTeam = React.lazy(() => import('../pages/MyTeam'))
const LazySetting = React.lazy(() => import('../pages/Setting'))
const LazyBilling = React.lazy(() => import('../pages/Billing'))


export const AllRoute = {
   privateRoutes: {
      Dashboard: {
         path: "/dashboard",
         element: LazyDashboard,
         pageName: "Dashboard",
         sidebar: {
            show: true,
            icon: DashboardIcon
         }
      },
      MYTEAM: {
         path: "/myteam",
         element:  LazyTeam,
         pageName: "My Team",
         sidebar: {
            show: true,
            icon: GroupsIcon
         }
      },
      MYTASK: {
         path: "/mytask",
         element: LazyMyTask,
         pageName: "My Task",
         sidebar: {
            show: true,
            icon: AssignmentIcon
         }
      },
      BILLING: {
         path: "/billig",
         element: LazyBilling,
         pageName: "Billing",
         sidebar: {
            show: true,
            icon: RequestQuoteIcon
         }
      },
      SETTINGS: {
         path: "/settings",
         element: LazySetting,
         pageName: "Settings",
         sidebar: {
            show: true,
            icon: SettingsIcon
         }
      },
   }
}