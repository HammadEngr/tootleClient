import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./subNav.module.css";
const SubNav = React.forwardRef((props, ref) => {
  const customClass = `${styles.nav} ${props.className}`;
  return (
    <nav className={customClass} ref={ref}>
      <ul className={styles.list_items}>
        <NavLink className={styles.list_item}>Images</NavLink>
        <NavLink className={styles.list_item}>Host</NavLink>
        <NavLink className={styles.list_item}>Category</NavLink>
        <NavLink className={styles.list_item}>Reviews</NavLink>
      </ul>
    </nav>
  );
});

export default SubNav;
