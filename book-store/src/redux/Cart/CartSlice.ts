import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  id: string;
  image: string;
  title: string;
  price: number;
  amount: number;
  totalPrice: number;
}

interface CartState {
  products: ProductState[];
  totalAmount: number;
  totalPrice: number;
}

const initialState = {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
} as CartState;

const calcTotalAmount = (products: ProductState[]) => {
  return products.reduce((sum: any, cur: any) => {
    return sum + cur.amount;
  }, 0);
};

const calcTotalPrice = (products: ProductState[]) => {
  return products.reduce((sum: any, cur: any) => {
    return sum + cur.totalPrice;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.products = [...state.products, action.payload.product];
      state.totalAmount = calcTotalAmount(state.products);
      state.totalPrice = calcTotalPrice(state.products);
    },
    edit: (state, action) => {
      let find = state.products.filter(
        (item: any) => item.id !== action.payload.product.id
      );

      if (find) {
        state.products = [...find, action.payload.product];
        state.totalAmount = calcTotalAmount(state.products);
        state.totalPrice = calcTotalPrice(state.products);
      }
    },
    remove: (state, action) => {
      let find = state.products.filter(
        (item: any) => item.id !== action.payload.id
      );

      if (find) {
        state.products = [...find];
        state.totalAmount = calcTotalAmount(state.products);
        state.totalPrice = calcTotalPrice(state.products);
      }
    },
    removeAll: (state) => {
      state.products = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { add, edit, remove, removeAll } = cartSlice.actions;

export const selectCartItems = (state: any) => state.cart.products;
export const selectTotalAmount = (state: any) => state.cart.totalAmount;
export const selectTotalPrice = (state: any) => state.cart.totalPrice;

export default cartSlice.reducer;
