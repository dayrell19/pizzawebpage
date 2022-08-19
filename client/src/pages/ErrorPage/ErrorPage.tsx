import React from "react";
import "./ErrorPage.css";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="errorContainer">
        <p>ERROR! PAGE NOT FOUND</p>
        <p>PLEASE RETURN TO THE HOME PAGE!</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
