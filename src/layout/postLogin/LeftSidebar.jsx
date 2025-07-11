  import React from 'react'
  import { combineClasses } from '../../utils/utils'
  import styles from './PostLogin.module.scss'
  import { useSelector } from 'react-redux'
  import { Navigate, NavLink, useNavigate } from 'react-router-dom';
  import logo from "../../assets/PNG/FFC-logo.png"
  import { sideBarNavigation } from '../../utils/sidebarNavigation';
import toast from 'react-hot-toast';

  const payrollRoutes = [
    { id: 1, pageName: "Employees", path: "/employees", icon: '' },
    { id: 2, pageName: "Salaries", path: "/salaries", icon: '' },
    { id: 3, pageName: "Attendance", path: "/attendance", icon: '' }
  ];

  const LeftSidebar = ({ toggleSidebar }) => {
    console.log('sideBarNavigation', sideBarNavigation)
      const { leftSidebar } = useSelector((state) => state.home)
      const nav = useNavigate()

      const handleLogout = () => {
          localStorage.removeItem("token")
          toast.success("Logout Sucessfull")
          setTimeout(()=> nav("/login"),800)  
      }
    return (
      <div
        className={combineClasses(
          styles.sidebar,
          !leftSidebar ? styles.closed : styles.open
        )}
        onMouseOver={toggleSidebar(true)}
      >
<div className={styles.logo}>
  <div className={styles.logoOpen}>
    <img
      src={logo}
      alt="Payroll Icon"
      className={styles.logoImageOpen}
    />
    <span className={leftSidebar ? styles.visible : styles.hidden}>
      Payroll Task
    </span>
  </div>
</div>


        <div className={styles.navSection}>
          {sideBarNavigation.map(({ id, path, pageName, icon: Icon }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `${styles.navLink} ${!leftSidebar ? styles.closed : ""} ${isActive ? styles.active : ""}`
              }
              state={{ previousPath: location.pathname }}
            >
              <Icon className={styles.icon} />
              {leftSidebar && <p className={styles.label}>{pageName}</p>}
            </NavLink>
          ))}
        </div>

        <div
          className={`${styles.navLink} ${styles.logout} ${!leftSidebar ? styles.closed : ""}`}
          onClick={handleLogout}
        >
          {/* <LogoutIcon /> */}
          {leftSidebar && <p className={styles.label}>Logout</p>}
        </div>
      </div>
    )
  }

  export default LeftSidebar