import React, { useEffect, useState } from 'react';
import styles from './PostLogin.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { sideBarNavigation } from '../../utils/sidebarNavigation';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLeftSidebar } from '../../redux/slices/homeSlice';
import { Button } from '@mui/material';
import { getUserName } from '../../utils/utils';

const Topbar = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [displayPage, setDisplayPage] = useState('')
  const location = useLocation();
  const dispatch = useDispatch();
  const { leftSidebar } = useSelector(state => state.home)
  const DisplayName = () => {
    const Path = window.location.pathname
    const Name = sideBarNavigation.find((e) => e.path === Path)
    setDisplayPage(Name.pageName)
  }
 
  const CurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    setCurrentTime(`${hours}:${minutes} | ${day} ${month} , ${year}`);
  }
  useEffect(() => {
    setInterval(() => CurrentTime(), 1000)
  }, [currentTime])
  useEffect(() => {
    DisplayName()
  }, [location])
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.leftSide}>
        <span className={styles.pageName}>{displayPage}</span>
      </div>

      <div className={styles.rightSide}>
        <div>
          {currentTime}
        </div>
        <span>{getUserName()}</span>
      </div>
    </div>
  );
};

export default Topbar;
