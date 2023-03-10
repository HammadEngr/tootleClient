import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./dashBoardLayout.module.css";

const DashBoardLayout = (props) => {
  const [pannelToggle, setPannelToggle] = useState(false);
  const customClass = `${styles.main} ${props.className}`;
  const collapseHandler = () => {
    setPannelToggle(true);
  };
  const showPannelHandler = () => {
    setPannelToggle(false);
  };
  const pannelClass = pannelToggle
    ? `${styles.left_box} ${styles.hide}`
    : `${styles.left_box}`;
  return (
    <div className={customClass}>
      <button className={styles.show_btn} onClick={showPannelHandler}>
        <div className={styles.collapse_bar}></div>
      </button>
      <div className={pannelClass}>
        <button className={styles.collapse} onClick={collapseHandler}>
          <div className={styles.collapse_bar}></div>
        </button>
        <div className={styles.links}>
          <NavLink to={props.mainLink} className={styles.dash}>
            {props.mainTitle}
          </NavLink>
          {props.dashBoardItemsList.map((item, i) => (
            <NavLink
              to={item.link}
              key={`${item.title}${i}`}
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className={styles.signout}>
          <button className={styles.signout_btn} onClick={props.signOut}>
            Sign Out
          </button>
          <NavLink to="/" className={styles.link}>
            Exit
          </NavLink>
        </div>
      </div>
      <div className={styles.right_box}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
