import { FC } from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
} from '@mui/x-data-grid';
import cn from 'classnames';
import { EmptyOverlay } from 'Components/DataGrid/EmptyOverlay.tsx';

import styles from './DataGrid.module.scss';

type DataGridProps = MuiDataGridProps;

export const DataGrid: FC<DataGridProps> = ({
  rows,
  columns,
  hideFooter = true,
  className,
  ...rest
}) => {
  return (
    <MuiDataGrid
      columns={columns}
      rows={rows}
      hideFooter={hideFooter}
      disableColumnMenu
      rowSelection={false}
      autoHeight
      slots={{
        noResultsOverlay: EmptyOverlay,
        noRowsOverlay: EmptyOverlay,
      }}
      className={cn(styles.customDataGrid, className)}
      {...rest}
    />
  );
};
