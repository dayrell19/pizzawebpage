export interface IOrder {
  id: string;
  date: string;
  completed: boolean;
  items: IOrderPizza[];
}

export interface IOrderPizza {
  name: string;
  ingredients: IIngredients[];
  price: number;
  size: string;
}

export interface IIngredients {
  ingredient: string;
  count: number;
}
