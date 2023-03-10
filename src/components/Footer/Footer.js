import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <footer className={customClass}>
      <ul className={styles.footer_items}>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            About
          </a>
        </li>
        <li className={styles.item_dot}></li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Destinations
          </a>
        </li>
        <li className={styles.item_dot}></li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Privacy Policy
          </a>
        </li>
        <li className={styles.item_dot}></li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Help Center
          </a>
        </li>
      </ul>
      <p className={styles.rights}>&#169; Tootle Technologies Pvt Ltd.</p>
    </footer>
  );
};

export default Footer;
