import React from "react";
import styles from "./sectionThree.module.css";
const SectionThree = () => {
  return (
    <>
      <h2 className={styles.sec_three_heading}>Key Points to Remember</h2>
      <div className={styles.keypoints_box}>
        <ul className={styles.key_points}>
          <h4 className={styles.sub_head}>House Rules</h4>
          <li>Check-in: 1:0PM - 6:00PM</li>
          <li>Checkout before: 10AM</li>
          <li>Max Guests: 7</li>
        </ul>
        <ul className={styles.key_points}>
          <h4 className={styles.sub_head}>Safety & property</h4>
          <li>No carbon monoxide alarm</li>
          <li>No smoke alarm</li>
          <li>Security camera/recording device</li>
        </ul>
        <ul className={styles.key_points}>
          <h4 className={styles.sub_head}>Cancellation policy</h4>
          <li>Cancel before Mar 5 for a partial refund.</li>
          <li>Review the Host’s full cancellation policy .</li>
        </ul>
      </div>
    </>
  );
};

export default SectionThree;
