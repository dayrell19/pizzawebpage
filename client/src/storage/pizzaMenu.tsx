import Pepperoni from "../assets/images/pizzas/pepperoni.webp";
import ChickenPesto from "../assets/images/pizzas/chickenpesto.webp";
import BeefBlueCheese from "../assets/images/pizzas/beefbluecheese.webp";
import ParmaProscuitto from "../assets/images/pizzas/parmaproscuitto.webp";
import Hawaiian from "../assets/images/pizzas/hawaiian.webp";
import MeatLovers from "../assets/images/pizzas/meatlovers.webp";
import BbqChicken from "../assets/images/pizzas/bbqchicken.webp";
import VeggiePesto from "../assets/images/pizzas/veggiepesto.webp";
import Capricciosa from "../assets/images/pizzas/capricciosa.webp";
import SmokedSalmon from "../assets/images/pizzas/smokedsalmon.webp";
import Margherita from "../assets/images/pizzas/magherita.webp";
import ChickenBaconAlfredo from "../assets/images/pizzas/chickenbaconalfredo.webp";

export const pizzas = [
  {
    name: "PEPPERONI",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Fior di Latte", count: 1 },
      { ingredient: "Grana Padano", count: 1 },
      { ingredient: "Pepperoni", count: 1 },
    ],
    image: Pepperoni,
    price: 15,
  },
  {
    name: "PESTO CHICKEN",
    ingredients: [
      { ingredient: "Pesto Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Fior di Latte", count: 1 },
      { ingredient: "Grana Padano", count: 1 },
      { ingredient: "Grilled Chicken", count: 1 },
      { ingredient: "Mushrooms", count: 1 },
      { ingredient: "Sun dried Tomatoes", count: 1 },
    ],
    image: ChickenPesto,
    price: 17,
  },
  {
    name: "BEEF & BLUE CHEESE",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Ground Beef", count: 1 },
      { ingredient: "Blue Cheese Dressing", count: 1 },
    ],
    image: BeefBlueCheese,
    price: 15,
  },
  {
    name: "PARMA PROSCUITTO",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Fior di Latte", count: 1 },
      { ingredient: "Grana Padano", count: 1 },
      { ingredient: "Prosciutto de Parma", count: 1 },
      { ingredient: "Arugula", count: 1 },
    ],
    image: ParmaProscuitto,
    price: 17,
  },
  {
    name: "HAWAIIAN",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Fior di Latte", count: 1 },
      { ingredient: "Grana Padano", count: 1 },
      { ingredient: "Prosciutto Cotto", count: 1 },
      { ingredient: "Pineapple", count: 1 },
    ],
    image: Hawaiian,
    price: 19,
  },
  {
    name: "MEAT LOVERS",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Cheddar", count: 1 },
      { ingredient: "Chorizo", count: 1 },
      { ingredient: "Ground Beef", count: 1 },
      { ingredient: "Ham", count: 1 },
      { ingredient: "Italian Sausage", count: 1 },
      { ingredient: "Pepperoni", count: 1 },
    ],
    image: MeatLovers,
    price: 19,
  },
  {
    name: "BBQ CHICKEN",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Cheddar", count: 1 },
      { ingredient: "BBQ base", count: 1 },
      { ingredient: "Red Pepper", count: 1 },
      { ingredient: "Mushroom", count: 1 },
    ],
    image: BbqChicken,
    price: 17,
  },
  {
    name: "VEGGIE PESTO",
    ingredients: [
      { ingredient: "Pesto Sauce", count: 1 },
      { ingredient: "Cheddar", count: 1 },
      { ingredient: "Black Olives", count: 1 },
      { ingredient: "Tomato", count: 1 },
    ],
    image: VeggiePesto,
    price: 13,
  },
  {
    name: "CAPRICCIOSA",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Cheddar", count: 1 },
      { ingredient: "Green Pepper", count: 1 },
      { ingredient: "Onion", count: 1 },
      { ingredient: "Red Pepper", count: 1 },
      { ingredient: "Spicy Mushroom", count: 1 },
    ],
    image: Capricciosa,
    price: 19,
  },
  {
    name: "SMOKED SALMON",
    ingredients: [
      { ingredient: "Alfredo Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Fior di Latte", count: 1 },
      { ingredient: "Grana Padano", count: 1 },
      { ingredient: "Smoked Salmon", count: 1 },
      { ingredient: "Red Onions", count: 1 },
      { ingredient: "Capers", count: 1 },
      { ingredient: "Crushed Dill", count: 1 },
    ],
    image: SmokedSalmon,
    price: 19,
  },
  {
    name: "MARGHERITA",
    ingredients: [
      { ingredient: "Tomato Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Basil", count: 1 },
      { ingredient: "Olive Oil", count: 1 },
    ],
    image: Margherita,
    price: 15,
  },
  {
    name: "CHICKEN BACON ALFREDO",
    ingredients: [
      { ingredient: "Alfredo Sauce", count: 1 },
      { ingredient: "Mozzarella", count: 1 },
      { ingredient: "Cheddar", count: 1 },
      { ingredient: "Mushroom", count: 1 },
      { ingredient: "Onion", count: 1 },
      { ingredient: "Grilled Chicken", count: 1 },
      { ingredient: "Bacon", count: 1 },
      { ingredient: "Provolone Cheese", count: 1 },
    ],
    image: ChickenBaconAlfredo,
    price: 17,
  },
];
