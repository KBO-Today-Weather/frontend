import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Team {
  name: string;
  color: string;
}

export const KBO_TEAMS: Team[] = [
  { name: "두산 베어스", color: "bg-doosan" },
  { name: "LG 트윈스", color: "bg-Lg" },
  { name: "키움 히어로즈", color: "bg-kiwoom" },
  { name: "KT 위즈", color: "bg-kt" },
  { name: "SSG 랜더스", color: "bg-ssg" },
  { name: "NC 다이노스", color: "bg-nc" },
  { name: "삼성 라이온즈", color: "bg-samsung" },
  { name: "롯데 자이언츠", color: "bg-lotte" },
  { name: "KIA 타이거즈", color: "bg-kia" },
  { name: "한화 이글스", color: "bg-hanwha" },
];

interface MyTeamState {
  selectedTeam: Team | null;
}

const initialState: MyTeamState = {
  selectedTeam: null,
};

const myTeamStore = createSlice({
  name: "myTeam",
  initialState,
  reducers: {
    setMyTeam(state, action: PayloadAction<Team>) {
      state.selectedTeam = action.payload;
    },
    clearMyTeam(state) {
      state.selectedTeam = null;
    },
  },
});

export const { setMyTeam, clearMyTeam } = myTeamStore.actions;
export const selectMyTeam = (state: { myTeam: MyTeamState }) =>
  state.myTeam.selectedTeam;
export default myTeamStore.reducer;