import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummySlice";
import myTeamReducer from "./myTeamStore";

export const makeStore = () => {
  return configureStore({
    reducer: {
      dummy: dummyReducer,
      myTeam: myTeamReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
