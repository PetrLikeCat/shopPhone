import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFullPhone } from './asyncActionsFull';
import { Phone, FullPhoneSliceState, Status } from './types';

const initialState: FullPhoneSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const fullPhone = createSlice({
  name: 'fullPhone',
  initialState,
  reducers: {
    setItemss(state, action: PayloadAction<Phone[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFullPhone.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchFullPhone.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchFullPhone.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    
    });
  },
});

export const { setItemss } = fullPhone.actions;

export default fullPhone.reducer;