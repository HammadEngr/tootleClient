import React from "react";
import styles from "./dbOverview.module.css";

const DBOverview = () => {
  return (
    <div className={styles.right_box_sub}>
      <div className={styles.header}>
        <h1 className={styles.welcome}>We welcome you ! Mr. Hammad</h1>
        <p className={styles.description}>
          This is your dashBoard where you can manage your places, add new
          places, you can see bookings <br /> edit your profile and other stuff
        </p>
        <img src="" alt="hammad"></img>
      </div>
      <div className={styles.stats}>
        <div className={styles.earning}>
          <h1 className={styles.earning_title}>Total Earnings</h1>
          <p className={styles.date}>28th Feb, 2023</p>
          <p className={styles.amount}>10,000</p>
        </div>
        <div className={styles.earning}>
          <h1 className={styles.earning_title}>This Month's Earning</h1>
          <p className={styles.date}>February 2023</p>
          <p className={styles.amount}>2000</p>
        </div>
        <div className={styles.earning}>
          <h1 className={styles.earning_title}>This Week's Earning</h1>
          <p className={styles.date}>February 2023</p>
          <p className={styles.amount}>500</p>
        </div>
      </div>
    </div>
  );
};

export default DBOverview;
