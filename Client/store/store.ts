import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./authSlice";
import profileSlice from "./profileSlice";
import dailynoteSlice from "./dailynoteSlice";
import { remove, save } from "../utils/securestore";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    user: authSlice,
    dailyNote: dailynoteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 256 },
      serializableCheck: { warnAfter: 256 },
    }),
});

store.subscribe(() => {
  const token = store.getState().user.token;
  token ? save("user.token", token) : remove("user.token");

  const expiration = store.getState().user.expiration;
  expiration
    ? save("user.expiration", expiration)
    : remove("auth.expirationDate");

  const user = store.getState().user.user;
  user ? save("user.user", JSON.stringify(user)) : remove("user.user");
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
