import { FC } from 'react';
import { DataGrid } from 'Components/DataGrid/DataGrid.tsx';
import { GridColDef, DataGridProps } from '@mui/x-data-grid';
import { Button } from 'Components/Button/Button.tsx';
import { useAppDispatch } from 'Hooks/redux.ts';
import { IconCross } from 'Components/Icons/IconCross/IconCross.tsx';

import styles from './UserInfoGrid.module.scss';

import { tablesSlice } from '@/src/store/reducers/tablesSlice.ts';
import { UserInfoGridActionPanel } from '@/src/Screens/TablesScreen/components/UserInfoGrid/components/UserInfoGridActionPanel/UserInfoGridActionPanel.tsx';

type UserInfoGridProps = Omit<DataGridProps, 'columns'> & {
  tableId: string;
  isFirstTable: boolean;
};

export const UserInfoGrid: FC<UserInfoGridProps> = ({
  rows,
  isFirstTable,
  tableId,
}) => {
  const dispatch = useAppDispatch();

  const { copyTable, deleteTable } = tablesSlice.actions;

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 95, sortable: false },
    { field: 'surname', headerName: 'Surname', width: 129, sortable: false },
    { field: 'age', headerName: 'Age', width: 96, sortable: false },
    { field: 'city', headerName: 'City', width: 80, sortable: false },
    {
      field: 'actions',
      headerName: '',
      width: 192,
      sortable: false,
      renderCell: (params) => (
        <UserInfoGridActionPanel rowData={params.row} tableId={tableId} />
      ),
    },
  ];

  const handleCopyTable = (): void => {
    dispatch(copyTable(tableId));
  };

  const handleDeleteTable = (): void => {
    dispatch(deleteTable(tableId));
  };

  return (
    <div>
      <div className={styles.userInfoGrid__buttons}>
        <Button onClick={handleCopyTable} size="small">
          Copy table
        </Button>
        {!isFirstTable && (
          <button
            className={styles.userInfoGrid__deleteButton}
            onClick={() => handleDeleteTable()}
          >
            <IconCross />
          </button>
        )}
      </div>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};
