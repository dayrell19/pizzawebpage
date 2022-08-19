import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://dayrell19_:Atletico00!@pizzaplazaserver.lbky7so.mongodb.net/PizzaPlaza?retryWrites=true&w=majority"
);

//Route import
import { ordersRouter } from "./routes/orders/orders";

app.use("/orders", ordersRouter);

app.listen(PORT, (): void => {
  console.log("Server Running!");
});
