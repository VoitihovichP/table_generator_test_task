import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITableRowData } from 'Models/table.model.ts';

interface InitialState extends ITableRowData {}

type StateFieldType = 'name' | 'surname' | 'age' | 'city';

const initialState: InitialState = {
  name: '',
  surname: '',
  age: '',
  city: '',
};

export const tableFormSlice = createSlice({
  name: 'tableForm',
  initialState,
  reducers: {
    changeFields(
      state,
      action: PayloadAction<{ field: StateFieldType; value: string }>,
    ) {
      state[action.payload.field] = action.payload.value;
    },
    reset: () => initialState,
  },
});

export default tableFormSlice.reducer;
