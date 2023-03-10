import React, { useState } from "react";
import styles from "./headerFilters.module.css";
const HeaderFilters = () => {
  const [isActive, setIsActive] = useState("");
  const clickHandler = (index) => {
    setIsActive(index);
  };
  return (
    <div className={styles.filters}>
      <div className={styles.filter_btn_box}>
        {["Get Stats", "Sort", "Filter"].map((item, index) => (
          <button
            className={
              isActive === index
                ? `${styles[`btn${index}`]} ${styles.isActive}`
                : styles[`btn${index}`]
            }
            key={item + index}
            onClick={() => clickHandler(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderFilters;
