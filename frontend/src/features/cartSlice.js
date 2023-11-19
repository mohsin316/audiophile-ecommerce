import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        //    console.log(action.payload);
        const cartQuantity = state.entities[action.payload.id]
          ? state.entities[action.payload.id].quantity
          : 0;
        cartAdapter.setOne(state, {
          ...action.payload,
          quantity: cartQuantity + action.payload.quantity,
        });
      },
      prepare(id, name, quantity, price, imageURL) {
        return {
          payload: { id, name, quantity, price, imageURL },
        };
      },
    },
    removeFromCart: (state, action) => {
      if (state.entities[action.payload.id].quantity <= 1) {
        cartAdapter.removeOne(state, action.payload.id);
      } else {
        cartAdapter.upsertOne(state, {
          id: action.payload.id,
          quantity: state.entities[action.payload.id].quantity - 1,
        });
      }
    },
    emptyCart: (state) => {
      cartAdapter.removeAll(state);
    },
  },
});

export const { selectAll, selectIds, selectEntities } =
  cartAdapter.getSelectors((state) => state.cart);

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
