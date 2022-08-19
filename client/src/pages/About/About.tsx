import React from "react";
import "./About.css";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutContainer">
        <div className="aboutHistoryContainer">
          <h3 className="aboutHistoryTitle">OUR HISTORY</h3>
          <div className="aboutTextContainer">
            <p className="aboutHistory">
              Pizza Plaza was created in 1957 in Bologna, Italy. Since then, it
              has been passed down generations of the Progiorno family and
              transformed into what it is today.
            </p>
            <p className="aboutHistory">
              Nowadays, Pizza Plaza is a successful pizza franchise, having over
              15,000 stores over more then 60 different countries. Our pizzas
              have been known for the thin dough and fresh ingredients,
              specially baked on wood-burning pizza ovens. That combined to our
              selected wine menu and the confort of our restaurants is a
              garantee for a good time between you and your friends/family.
            </p>
            <p className="aboutHistory">
              The secret to our food? It’s pretty simple. Source fresh, quality
              ingredients. Prepare dishes with care and passion. Serve them with
              a warm smile. In other words, we take pride in what we make and
              how we share it. Even though we’ve grown a lot over the years, our
              mission is still the same: Always the best food, made especially
              for you.
            </p>
          </div>
        </div>
        <div className="aboutSellingContainer">
          <h3 className="aboutSellingTitle">WHY PIZZA PLAZA?</h3>
          <div className="aboutTextContainer">
            <p className="aboutSelling">
              At Pizza Plaza, we are not just a successful, profitable, and
              proven business model, we are much more than that.
            </p>
            <p className="aboutSelling">
              We pride ourselves on a culture of collaboration, unity,
              involvement, commitment, and clear communication. We value and
              respect our relationships and continuously seek unique and
              innovative ways to launch our franchisees to new heights of
              success. When we work together, we all succeed!
            </p>
            <p className="aboutSelling">
              Our success has always been a true labor of love, friendships, and
              family. From our very first store opening to our newest stores. We
              have always maintained strong and long-lasting relationships with
              all of our franchise partners.
            </p>
            <p className="aboutSelling">
              {" "}
              All members of the Pizza Garden brand are dedicated and integral
              to Pizza Garden’s continued business success.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
