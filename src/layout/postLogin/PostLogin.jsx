import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LeftSidebar from './LeftSidebar'
import { setLeftSidebar } from '../../redux/slices/homeSlice'
import Topbar from './Topbar'
import styles from './postLogin.module.scss'
import { sideBarNavigation } from '../../utils/sidebarNavigation'
import { combineClasses } from '../../utils/utils'

const PostLogin = () => {
  const { leftSidebar } = useSelector((state) => state.home)
  const dispatch = useDispatch()

  const toggleSidebar = (flag) => (e) => {
     e.stopPropagation();
     leftSidebar !== flag && dispatch(setLeftSidebar(flag)) 
  }

  return (
    <div className={styles.layout}>
      <LeftSidebar toggleSidebar={toggleSidebar}/>
      <div  onMouseOver={toggleSidebar(false)} className={!leftSidebar ? combineClasses(styles.rightSideContainer, styles.sidebarClosed) : styles.rightSideContainer}>
      <Topbar/> 
      <div className={styles.outletDiv}>
        <Suspense>
            <Outlet/>
        </Suspense>
        </div>
        </div>
    </div>
  )
}

export default PostLogin