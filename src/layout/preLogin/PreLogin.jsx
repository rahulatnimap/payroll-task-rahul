import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import style from "./PreLogin.module.scss"

const PreLogin = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.leftContainer}>
        <div className={style.leftContainer_content}>
          <h4>Daily Employee attendance tracking</h4>
          <p>Application allows you to monitor your employee’s Check-In, Check-Out time and attendance from anywhere and at any time.</p>
        </div>
      </div>
      <div className={style.rightContainer}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default PreLogin