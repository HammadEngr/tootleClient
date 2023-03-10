import React, { useEffect, useState } from "react";
import styles from "./sectionOne.module.css";

const SectionOne = (props) => {
  const [reviews, setReviews] = useState();
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (props.place && props.place.reviews && props.place.images) {
      setReviews(props.place.reviews.length);
      setImages(props.place.images);
    }
  }, [props.place, props.place.images]);

  return (
    <>
      <div className={styles.title_box}>
        <h1 className={styles.title}>
          {props.place.name} | {props.place.bedRooms} Bedrooms |
          {props.place.category}
        </h1>
        <div className={styles.rating_box}>
          <p className={styles.rating}>
            <span className={styles.star}>&#9733;</span>
            {props.place.ratingsAverage}
          </p>
          <p className={styles.reviews}>{reviews} Reviews</p>
          <p className={styles.wish}>&#x2764; Make a wish</p>
        </div>
      </div>
      <div className={styles.images_box}>
        {images.map((item, i) => (
          <div className={styles.img_box}>
            <img
              className={styles.img}
              src={`/images/${item}`}
              alt="tulip"
              key={"hotelBG_large" + i}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionOne;
