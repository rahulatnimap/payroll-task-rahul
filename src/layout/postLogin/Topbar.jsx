import React, { useEffect, useState } from 'react';
import styles from './PostLogin.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { sideBarNavigation } from '../../utils/sidebarNavigation';

const Topbar = () => {
  const [currentTime, setCurrentTime] = useState('')
  const DisplayName = () => {
    const Path = window.location.pathname
    const Name = sideBarNavigation.find((e) => e.path === Path)
    return Name.pageName
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
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.leftSide}>
        <ArrowBackIosNewIcon className={styles.backIcon} />
        <span className={styles.pageName}>{DisplayName()}</span>
      </div>

      <div className={styles.rightSide}>
        <div>
          {currentTime}
        </div>
        {/* You can add more components like user avatar, language selector etc. */}
        <NotificationsNoneIcon />
        <span>John Doe</span>
      </div>
    </div>
  );
};

export default Topbar;
