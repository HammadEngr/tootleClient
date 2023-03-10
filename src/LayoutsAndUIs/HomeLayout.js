import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const HomeLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default HomeLayout;
