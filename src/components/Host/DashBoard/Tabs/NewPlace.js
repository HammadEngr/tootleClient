import React from "react";
import styles from "./newPlace.module.css";
import FormCard from "../../../../Form/FormCard";
const NewPlace = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Add place details</h1>
      <div className={styles.container}>
        <FormCard className={styles.form}>
          <input
            className={styles.input}
            placeholder="Enter Place Name"
            autoFocus
          />
          <input
            className={styles.input}
            placeholder="Enter the category (hotel, house, apartment or guesthouse)"
          />
          <input
            className={styles.input}
            placeholder="Enter Price (only number)"
          />
          <input
            className={styles.input}
            placeholder="Enter max guest capacity (numbers only)"
          />
          <input
            className={styles.input}
            placeholder="Price discount if any (numbers only)"
          />
          <input
            className={styles.input}
            placeholder="Number of bedrooms (numbers only)"
          />
          <input
            className={styles.input}
            placeholder="Number of bathrooms (numbers only)"
          />
          <input
            className={styles.input}
            placeholder="Brief summary (only text)"
          />
          <input
            className={styles.input}
            placeholder="Description (only text)"
          />
          <div className={styles.btn_box}>
            <button type="submit" className={styles.btn}>
              Save
            </button>
            <button className={styles.btn}>Clear All Fields</button>
          </div>
        </FormCard>
      </div>
    </div>
  );
};

export default NewPlace;
