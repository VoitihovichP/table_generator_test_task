import { FC, useCallback, useState } from 'react';
import { TextButton } from 'Components/TextButton/TextButton.tsx';
import { ITableRowStore } from 'Models/table.model.ts';

import styles from './UserInfoGridActionPanel.module.scss';

import { UserInfoEditModal } from '@/src/Screens/TablesScreen/components/UserInfoGrid/components/UserInfoEditModal/UserInfoEditModal.tsx';

type UserInfoGridActionPanelProps = {
  tableId: string;
  rowData: ITableRowStore;
};

export const UserInfoGridActionPanel: FC<UserInfoGridActionPanelProps> = ({
  rowData,
  tableId,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleChangeEdit = useCallback((isCurrentEdit: boolean): void => {
    setIsEdit(isCurrentEdit);
  }, []);

  return (
    <>
      <div className={styles.UserInfoGridActionPanel}>
        <TextButton onClick={() => handleChangeEdit(true)}>Edit</TextButton>
        <TextButton variant="error">Delete</TextButton>
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
