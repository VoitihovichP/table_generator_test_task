import { FC, useCallback, useState } from 'react';
import { TextButton } from 'Components/TextButton/TextButton.tsx';

import styles from './UserInfoGridActionPanel.module.scss';

import { UserInfoEditModal } from '@/src/Screens/TablesScreen/components/UserInfoGrid/components/UserInfoEditModal/UserInfoEditModal.tsx';

export const UserInfoGridActionPanel: FC = () => {
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
        onClose={() => handleChangeEdit(false)}
      />
    </>
  );
};
