import React, { useState, useEffect } from "react";
const PlacesContext = React.createContext({
  places: "",
  isLoading: "",
  hasError: "",
});

export const PlacesContextProvider = (props) => {
  const [places, setPlaces] = useState("");

  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/tootle/v1/places");
        const data = await res.json();
        if (data.status === "fail") {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }
        setPlaces(data.data.doc);

        setIsLoading(false);
        // console.log(data.data.doc);
      } catch (err) {
        setIsLoading(false);
        setHasError(true);
      }
    };
    setTimeout(() => {
      fetchPlace();
    }, 500);
  }, []);

  return (
    <PlacesContext.Provider value={{ places, isLoading, hasError }}>
      {props.children}
    </PlacesContext.Provider>
  );
};
export default PlacesContext;
