import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";
import LogInContext from "../../Contexts/LogInContext";
const NavBar = (props) => {
  const hostCtx = useContext(LogInContext);
  const navToDashBoard = hostCtx.isHostLogedIn
    ? "/hostDashBoard"
    : "/guestDashBoard";

  const DashBoard = hostCtx.isHostLogedIn
    ? "Host Dash Board"
    : "Guest Dash Board";

  const loginState = hostCtx.isHostLogedIn || hostCtx.isGuestLogedIn;
  const customClass = `${styles.main} ${props.className}`;
  return (
    <nav className={customClass}>
      <h1 className={styles.title}>Tootle</h1>
      <h1 className={styles.welcome}>Minimalized tootle experience</h1>
      <div className={styles.btn_box}>
        {!loginState && (
          <>
            <NavLink to="/loginHost" className={styles.btn}>
              Host
            </NavLink>
            <NavLink to="/loginGuest" className={styles.btn}>
              Guest
            </NavLink>
          </>
        )}
        {loginState && (
          <NavLink to={navToDashBoard} className={styles.btn_dash}>
            {DashBoard}
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
