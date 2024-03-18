import { FC, useCallback, useState } from 'react';
import { TextButton } from 'Components/TextButton/TextButton.tsx';
import { ITableRowStore } from 'Models/table.model.ts';
import { useAppDispatch } from 'Hooks/redux.ts';

import styles from './UserInfoGridActionPanel.module.scss';

import { UserInfoEditModal } from '@/src/Screens/TablesScreen/components/UserInfoGrid/components/UserInfoEditModal/UserInfoEditModal.tsx';
import { tablesSlice } from '@/src/store/reducers/tablesSlice.ts';

type UserInfoGridActionPanelProps = {
  tableId: string;
  rowData: ITableRowStore;
};

export const UserInfoGridActionPanel: FC<UserInfoGridActionPanelProps> = ({
  rowData,
  tableId,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { deleteRow } = tablesSlice.actions;

  const handleChangeEdit = useCallback((isCurrentEdit: boolean): void => {
    setIsEdit(isCurrentEdit);
  }, []);

  const handleDeleteRow = useCallback(() => {
    dispatch(deleteRow({ rowId: rowData.id, tableId: tableId }));
  }, [rowData, tableId]);

  return (
    <>
      <div className={styles.UserInfoGridActionPanel}>
        <TextButton onClick={() => handleChangeEdit(true)}>Edit</TextButton>
        <TextButton variant="error" onClick={handleDeleteRow}>
          Delete
        </TextButton>
      </div>
      <UserInfoEditModal
        open={isEdit}
        tableId={tableId}
        onClose={() => handleChangeEdit(false)}
        rowData={rowData}
      />
    </>
  );
};
