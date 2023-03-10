import React from "react";
import styles from "./booking.module.css";
const Booking = (props) => {
  return (
    <div className={styles.booking_box}>
      <div className={styles.booking_title_box}>
        <h2 className={styles.res_title}>Make a Reservation</h2>
        <h2 className={styles.res_price}>
          PKR-{props.place.price} <span className={styles.night}>night</span>
        </h2>
      </div>
      <div className={styles.book}>
        <div className={styles.label_box}>
          <label htmlFor="checkin" className={styles.label}>
            Check In
            <input type="date" className={styles.checkIn} name="checkin" />
          </label>
        </div>
        <div className={styles.label_box}>
          <label htmlFor="checkout" className={styles.label}>
            Check Out
            <input type="date" className={styles.checkIn} name="checkout" />
          </label>
        </div>
        <div className={styles.label_box}>
          <label htmlFor="checkout" className={styles.label}>
            Guest Count
            <input
              type="number"
              className={styles.checkIn}
              name="checkout"
              defaultValue="1"
            />
          </label>
        </div>
      </div>
      <div className={styles.booking_btn}>
        <button className={styles.booking_reserve_btn}>
          Click Me to Reserve
        </button>
      </div>
    </div>
  );
};

export default Booking;
