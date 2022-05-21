import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      console.log(` nice ${state.roomId}`)
    },
  },
});

export const { enterRoom } = appSlice.actions;


export const selectRoomId = state => state.app.roomId;
console.log(selectRoomId)

export default appSlice.reducer;
