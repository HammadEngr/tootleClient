import React from "react";
import styles from "./places.module.css";
import hotel from "../../../../images/hotel.jpg";
import Place from "./Place";
const Places = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>An Overview of Places You Host</h1>
      <div className={styles.container}>
        <Place photo={hotel} />
        <Place photo={hotel} />
        <Place photo={hotel} />
        <Place photo={hotel} />
      </div>
    </div>
  );
};

export default Places;
