import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./smallCard.module.css";

import wishIcon from "../images/icons/love.png";

const SmallCard = (props) => {
  const slideRef = useRef();
  const [width, setWidth] = useState("");
  const [distanceFromPivot, setDistanceFromPivot] = useState();
  const [images, setImages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setWidth(slideRef.current.clientWidth);
    const carouselAngle = 60 * (images.length - 1);
    const distance = +Math.round(
      width / 2 / Math.tan((Math.PI / 180) * (carouselAngle / 2))
    );
    setDistanceFromPivot(distance);
  }, [images, width]);

  useEffect(() => {
    if (props.places && props.places.images) {
      setImages(props.places.images);
    }
  }, [props.places, width]);

  const nextSlide = () => {
    setSlideIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    setSlideIndex((prev) => prev - 1);
  };
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <Link to={props.places.id} className={styles.link}>
        <div className={styles.box}>
          <div className={styles.scene}>
            <div className={styles.carousel} ref={slideRef}>
              {images.map((item, i) => (
                <div
                  className={styles.pic_box}
                  key={i + "bgSlideMini"}
                  style={{
                    transform: `rotateY(${
                      120 + (i + slideIndex) * 120
                    }deg) translateZ(${distanceFromPivot}px)`,
                  }}
                >
                  <div className={styles.wish_box}>
                    <img
                      src={wishIcon}
                      alt="wishlist"
                      className={styles.wish_icon}
                    />
                  </div>
                  <img
                    src={`images/${item}`}
                    alt="pic"
                    className={styles.pic}
                  />
                </div>
              ))}
            </div>
            <p className={styles.img_count}>{images.length} images</p>
          </div>

          <div className={styles.details}>
            <div className={styles.title_box}>
              <h1 className={styles.title}>{props.places.name}</h1>
              <p className={styles.detail}>{props.places.ratingsAverage}</p>
            </div>
            <div className={styles.detail_box}>
              <div className={styles.summary}>
                <p className={styles.detail}>{props.places.summary}</p>
              </div>
              <div className={styles.tags}>
                <p className={styles.detail}>{props.places.category}</p>
                <p className={styles.detail}>${props.places.price}</p>
                <p className={styles.detail}>
                  Max Guests: {props.places.maxGuest}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <button className={styles.left_btn} onClick={prevSlide}>
        &lt;
      </button>
      <button className={styles.right_btn} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default SmallCard;
