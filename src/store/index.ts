import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { player } from "./slices/player";

export const store = configureStore({
  reducer: {
    player,
  },
});

// Retorna o tipo da minha função store, logo volta o tipo do meu global state (store)
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
