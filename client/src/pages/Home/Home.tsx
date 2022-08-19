import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Navbar />
        <div className="homeButtonContainer">
          <Link to="/menu">
            <button>SEE MENU</button>
          </Link>
          <Link to="/">
            <button id="myo">MAKE YOUR OWN</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
