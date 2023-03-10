import React, { useContext } from "react";
import styles from "./home.module.css";
import PlacesContext from "../../Contexts/PlacesContext";

import HomeLayout from "../../LayoutsAndUIs/HomeLayout";
import SmallCard from "../../LayoutsAndUIs/SmallCard";
import IsLoading from "../../LayoutsAndUIs/IsLoading";
import HasError from "../../LayoutsAndUIs/HasError";
import bg from "../../images/bg.jpg";
const Home = (props) => {
  const placesCTX = useContext(PlacesContext);

  let hasPlaces = placesCTX.places && !placesCTX.hasError;

  return (
    <HomeLayout>
      <main className={styles.main}>
        <div
          className={styles.bg_div}
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
        {placesCTX.isLoading && <IsLoading />}
        {hasPlaces &&
          placesCTX.places.map((place) => (
            <SmallCard className={styles.card} places={place} />
          ))}
        {placesCTX.hasError && <HasError />}
      </main>
    </HomeLayout>
  );
};

export default Home;
