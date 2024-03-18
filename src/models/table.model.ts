import { GridRowsProp } from '@mui/x-data-grid';

export interface ITable {
  id: string;
  rows: GridRowsProp<ITableRowStore>;
}

export interface ITableRowData {
  [key: string]: string;
  name: string;
  surname: string;
  age: string;
  city: string;
}

export interface ITableRowStore extends ITableRowData {
  id: string;
}

export interface IEditRowData {
  tableId: string;
  row: ITableRowStore;
}

export interface IDeleteRow {
  tableId: string;
  rowId: string;
}
