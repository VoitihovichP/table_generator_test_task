import { FC } from 'react';
import { DataGrid } from 'Components/DataGrid/DataGrid.tsx';
import { GridColDef, DataGridProps } from '@mui/x-data-grid';
import { Button } from 'Components/Button/Button.tsx';
import { useAppDispatch, useAppSelector } from 'Hooks/redux.ts';
import { generateUniqueId } from 'Utils/generateUniqueId.ts';

import styles from './UserInfoGrid.module.scss';

import { tablesSlice } from '@/src/store/reducers/tablesSlice.ts';

type UserInfoGridProps = Omit<DataGridProps, 'columns'> & {
  tableId: string;
  isFirstTable: boolean;
};

export const UserInfoGrid: FC<UserInfoGridProps> = ({
  rows,
  isFirstTable,
  tableId,
}) => {
  const { tables } = useAppSelector((state) => state.tables);
  const dispatch = useAppDispatch();

  const { changeTables } = tablesSlice.actions;

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', sortable: false },
    { field: 'surname', headerName: 'Surname', sortable: false },
    { field: 'age', headerName: 'Age', sortable: false },
    { field: 'city', headerName: 'City', sortable: false },
  ];

  const handleCopyTable = (): void => {
    if (tables.length === 0) {
      return;
    }

    const tableCopy = {
      id: generateUniqueId(),
      rows: tables[0].rows,
    };

    dispatch(changeTables([tables[0], tableCopy, ...tables.slice(1)]));
  };

  const handleDeleteTable = (): void => {
    dispatch(changeTables(tables.filter((item) => item.id !== tableId)));
  };

  return (
    <div>
      {isFirstTable ? (
        <Button className={styles.actionButton} onClick={handleCopyTable}>
          Copy table
        </Button>
      ) : (
        <Button className={styles.actionButton} onClick={handleDeleteTable}>
          Delete
        </Button>
      )}
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};
