import { createSlice } from '@reduxjs/toolkit';
import { ITable } from 'Models/table.model.ts';

interface InitialState {
  tables: Array<ITable>;
}

const initialState: InitialState = {
  tables: [],
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
});

export default tablesSlice.reducer;
