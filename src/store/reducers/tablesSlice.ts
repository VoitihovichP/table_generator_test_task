import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITable, ITableRowStore } from 'Models/table.model.ts';
import { generateUniqueId } from 'Utils/generateUniqueId.ts';

interface InitialState {
  tables: Array<ITable>;
}

const initialState: InitialState = {
  tables: [
    {
      id: generateUniqueId(),
      rows: [
        {
          id: generateUniqueId(),
          name: 'Name',
          surname: 'Surname',
          age: 'Age',
          city: 'City',
        },
      ],
    },
  ],
};

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addRow(state, action: PayloadAction<ITableRowStore>) {
      state.tables[0].rows = [...state.tables[0].rows, action.payload];
    },
  },
});

export default tablesSlice.reducer;
