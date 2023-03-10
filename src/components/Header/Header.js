import React, { useRef } from "react";
import useElementObserver from "../../hooks/useIElementObserver";
import styles from "./header.module.css";
import NavBar from "./NavBar";
import HeaderFilters from "./HeaderFilters";
// intersection observer Options
const options = {
  root: null,
  rootMargin: "120px",
  threshold: 1.0,
};

const Header = (props) => {
  const headerRef = useRef(null);
  // Intersection Observer
  const { isVisible } = useElementObserver(headerRef, options);
  // define sticky nav class conditionally based on observer result
  const stickyNav = !isVisible
    ? `${styles.sticky} ${styles.main}`
    : `${styles.main}`;
  const customClass = `${stickyNav} ${props.className}`;
  return (
    <header ref={headerRef}>
      <NavBar className={customClass} />
      <HeaderFilters />
    </header>
  );
};

export default Header;
