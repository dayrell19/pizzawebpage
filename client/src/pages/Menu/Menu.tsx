import React from "react";
import "./Menu.css";
import { pizzas } from "../../storage/pizzaMenu";
import { Pizza } from "../../helpers/interfaces/IPizza";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="menuCardContainer">
        {pizzas.map((pizza: Pizza, key: number) => {
          return (
            <Card
              key={key}
              name={pizza.name}
              ingredients={pizza.ingredients}
              image={pizza.image}
              price={pizza.price}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
