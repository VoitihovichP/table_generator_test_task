import { FC } from 'react';
import { DataGrid } from 'Components/DataGrid/DataGrid.tsx';
import { GridColDef, DataGridProps } from '@mui/x-data-grid';

type UserInfoGridProps = Omit<DataGridProps, 'columns'>;

export const UserInfoGrid: FC<UserInfoGridProps> = ({ rows }) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150, sortable: false },
    { field: 'surname', headerName: 'Surname', width: 150, sortable: false },
    { field: 'age', headerName: 'Age', width: 150, sortable: false },
    { field: 'city', headerName: 'City', width: 150, sortable: false },
  ];

  return <DataGrid columns={columns} rows={rows} />;
};
