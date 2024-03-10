import { FC } from 'react';
import { DataGrid } from 'Components/DataGrid/DataGrid.tsx';
import { GridColDef, DataGridProps } from '@mui/x-data-grid';

type UserInfoGridProps = Omit<DataGridProps, 'columns'>;

export const UserInfoGrid: FC<UserInfoGridProps> = ({ rows }) => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', sortable: false },
    { field: 'surname', headerName: 'Surname', sortable: false },
    { field: 'age', headerName: 'Age', sortable: false },
    { field: 'city', headerName: 'City', sortable: false },
  ];

  return <DataGrid columns={columns} rows={rows} />;
};
