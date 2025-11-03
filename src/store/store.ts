import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      dummy: dummyReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
