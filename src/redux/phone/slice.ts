import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPhone } from './asyncActions';
import { Phone, PhoneSliceState, Status } from './types';

const initialState: PhoneSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Phone[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhone.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPhone.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPhone.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = phoneSlice.actions;

export default phoneSlice.reducer;
