import React from "react";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sub_box}>
        <div className={styles.heading}>
          <p className={styles.sub_heading}>Name</p>
          <p>
            Hammad <span className={styles.lastName}>Ahmed</span>
          </p>
        </div>
        <div className={styles.heading}>
          <p className={styles.sub_heading}>Number of Places</p>
          <p>1</p>
        </div>
        <div className={styles.heading}>
          <p className={styles.sub_heading}>Category</p>
          <p>Hotel</p>
        </div>
        <div className={styles.heading}>
          <p className={styles.sub_heading}>Bookings</p>
          <p>2</p>
        </div>
        <div className={styles.heading}>
          <p className={styles.sub_heading}>Total Reviews</p>
          <p>10</p>
        </div>
        <div className={styles.heading}>
          <p className={styles.sub_heading}>Average Rating</p>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
