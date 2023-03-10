import React from "react";
import styles from "./sectionTwo.module.css";
const SectionTwo = (props) => {
  return (
    <>
      <div className={styles.host_box}>
        <h2 className={styles.host}>Hosted by Hammad Ahmed</h2>
        <div className={styles.details}>
          <p className={styles.detail}>Max guest: {props.place.maxGuest}</p>
          <p>&#8226;</p>
          <p className={styles.detail}>Bed rooms: {props.place.bedRooms}</p>
          <p>&#8226;</p>
          <p className={styles.detail}>Bath rooms: {props.place.bathRooms}</p>
        </div>
      </div>

      <div className={styles.features}>
        <p className={styles.feature}>&#8226; River side</p>
        <p className={styles.feature}>&#8226; Dedicated wifi</p>
        <p className={styles.feature}>&#8226; Luxury Gym</p>
        <p className={styles.feature}>&#8226; Jogging track</p>
        <p className={styles.feature}>&#8226; Free Parking</p>
      </div>
    </>
  );
};

export default SectionTwo;
