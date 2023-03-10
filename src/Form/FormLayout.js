import React from "react";
import styles from "./formLayout.module.css";
import { Link } from "react-router-dom";

const FormLayout = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <Link to={`${props.link}`} className={styles.go_home}>
        {props.linkTo}
      </Link>
      <div className={styles.box_left}>
        <h1 className={styles.heading}>{props.heading}</h1>
        <p>{props.subHeading}</p>
      </div>
      <div className={styles.box_right}>{props.children}</div>
    </div>
  );
};

export default FormLayout;
