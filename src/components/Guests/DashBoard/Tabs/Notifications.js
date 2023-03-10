import React from "react";
import styles from "./notifications.module.css";
import close from "../../../../images/icons/close.png";
const Notifications = () => {
  const closeHandler = () => {};
  return (
    <div className={styles.main}>
      <div className={styles.wraper}>
        <h1>Notifications</h1>

        <div className={styles.box}>
          <p className={styles.icon}>Tootle</p>
          <div className={styles.msg}>
            <h3>Message</h3>
            <p>Date</p>
          </div>
          <button className={styles.close_btn} onClick={closeHandler}>
            <img src={close} alt="close" className={styles.close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
