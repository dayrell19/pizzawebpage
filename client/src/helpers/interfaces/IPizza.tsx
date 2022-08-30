import { IIngredients } from "./IOrder";

export interface Pizza {
  name: string;
  ingredients: IIngredients[];
  image?: any;
  price: number;
}
