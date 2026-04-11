import { createSlice } from "@reduxjs/toolkit";

// 임시 슬라이스
const dummySlice = createSlice({
  name: "dummy",
  initialState: { value: 0 },
  reducers: {
    // 비어 있어도 괜찮습니다.
  },
});

// 리듀서를 export 합니다.
export default dummySlice.reducer;
