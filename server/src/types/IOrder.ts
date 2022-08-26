export interface IOrder {
  _id: string;
  date: string;
  completed: boolean;
  items: [IOrderPizza];
}

export interface IOrderPizza {
  name: string;
  ingredients: string;
  price: number;
  size: string;
}
