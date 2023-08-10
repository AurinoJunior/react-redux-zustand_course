import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Pegar roupas na lavanderia"],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const { add } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

// Retorna o tipo da minha função store, logo volta o tipo do meu global state (store)
type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
