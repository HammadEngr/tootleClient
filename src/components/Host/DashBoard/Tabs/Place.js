import React from "react";
import styles from "./place.module.css";
import { Link } from "react-router-dom";
const Place = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src={props.photo} alt="place" className={styles.photo_actual} />
      </div>
      <div className={styles.details}>
        <h3>The Tulip Resort</h3>
        <div className={styles.sub_detail}>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Category</p>
            <p>Hotel</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Price</p>
            <p>100 Rs</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Max Guests</p>
            <p>7</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Rating</p>
            <p>4.5</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Summary</p>
            <p>Summary</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Totel Bedsrooms</p>
            <p>3</p>
          </div>
          <div className={styles.tag}>
            <p className={styles.tag_title}>Total Bathrooms</p>
            <p>2</p>
          </div>
        </div>
        <Link className={styles.modify}>Modify this place</Link>
      </div>
    </div>
  );
};

export default Place;
