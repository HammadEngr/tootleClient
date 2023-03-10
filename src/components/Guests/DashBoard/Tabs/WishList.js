import React from "react";
import styles from "./wishList.module.css";
import place from "../../../../images/hotel.jpg";

const WishList = () => {
  return (
    <div className={styles.main}>
      <h1>WishList</h1>
      <div className={styles.box}>
        <div className={styles.place}>
          <div className={styles.img_box}>
            <img src={place} alt="place" className={styles.img} />
          </div>
          <h3>Place name</h3>
        </div>
        <div className={styles.place}>
          <div className={styles.img_box}>
            <img src={place} alt="place" className={styles.img} />
          </div>
          <h3>Place name</h3>
        </div>
        <div className={styles.place}>
          <div className={styles.img_box}>
            <img src={place} alt="place" className={styles.img} />
          </div>
          <h3>Place name</h3>
        </div>
        <div className={styles.place}>
          <div className={styles.img_box}>
            <img src={place} alt="place" className={styles.img} />
          </div>
          <h3>Place name</h3>
        </div>
      </div>
    </div>
  );
};

export default WishList;
