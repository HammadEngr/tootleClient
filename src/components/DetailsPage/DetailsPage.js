import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detailsPage.module.css";
import NavBar from "../Header/NavBar";
import SubNav from "./SubNav";
import Footer from "../Footer/Footer";
//
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Booking from "./Booking";
import SectionThree from "./SectionThree";
//
import IsLoading from "../../LayoutsAndUIs/IsLoading";
import HasError from "../../LayoutsAndUIs/HasError";
//
import useElementObserver from "../../hooks/useIElementObserver";
const DetailsPage = () => {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const headerRef = useRef(null);
  const params = useParams();
  const placeId = params.id;

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/tootle/v1/places/${placeId}`
        );
        const data = await res.json();
        if (data.status === "fail") {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }

        setPlace(data.data.doc);
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setIsLoading(false);
      }
    };
    fetchPlace();
  }, [placeId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = {
    root: null,
    rootMargin: "120px",
    threshold: 1.0,
  };
  const { isVisible } = useElementObserver(headerRef, options);
  const subNavClass = !isVisible ? styles.sticky : "";

  return (
    <main className={styles.main}>
      <header ref={headerRef}>
        <NavBar />
        <SubNav className={subNavClass} />
      </header>

      {isLoading && <IsLoading />}
      {hasError && <HasError />}
      {place && !hasError && (
        <>
          <section className={styles.sec_one}>
            <SectionOne place={place} />
          </section>
          <section className={styles.sec_two}>
            <SectionTwo place={place} />
          </section>
          <section className={styles.booking}>
            <Booking place={place} />
          </section>
          <section className={styles.sec_three}>
            <SectionThree />
          </section>
        </>
      )}

      <Footer />
    </main>
  );
};

export default DetailsPage;
