import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IDeleteRow,
  IEditRowData,
  ITable,
  ITableRowStore,
} from 'Models/table.model.ts';
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
    editRow(state, action: PayloadAction<IEditRowData>) {
      const { tableId, row } = action.payload;

      const tableIndex = state.tables.findIndex((item) => item.id === tableId);
      const rowIndex = state.tables[tableIndex].rows.findIndex(
        (item) => item.id === row.id,
      );

      state.tables[tableIndex].rows[rowIndex] = row;
    },
    deleteRow(state, action: PayloadAction<IDeleteRow>) {
      const { tableId, rowId } = action.payload;

      const tableIndex = state.tables.findIndex((item) => item.id === tableId);
      const rowIndex = state.tables[tableIndex].rows.findIndex(
        (item) => item.id === rowId,
      );

      state.tables[tableIndex].rows.splice(rowIndex, 1);
    },
    changeTables(state, action: PayloadAction<Array<ITable>>) {
      state.tables = action.payload.map((table) => ({
        ...table,
        rows: [...table.rows],
      }));
    },
  },
});

export default tablesSlice.reducer;
