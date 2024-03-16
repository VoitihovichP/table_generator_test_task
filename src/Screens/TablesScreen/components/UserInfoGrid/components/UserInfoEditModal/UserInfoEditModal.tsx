import { FC } from 'react';
import { Modal } from 'Components/Modal/Modal.tsx';
import { ITableRowData, ITableRowStore } from 'Models/table.model.ts';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'Hooks/redux.ts';

import { Form } from '@/src/Screens/TablesScreen/components/Form/Form.tsx';
import { tablesSlice } from '@/src/store/reducers/tablesSlice.ts';

type UserInfoEditModalProps = {
  open: boolean;
  tableId: string;
  rowData: ITableRowStore;
  onClose: () => void;
};

export const UserInfoEditModal: FC<UserInfoEditModalProps> = ({
  open,
  rowData,
  tableId,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const { editRow } = tablesSlice.actions;

  const { id, ...editDataWithoutId } = rowData;

  const handleSaveChanges: SubmitHandler<ITableRowData> = (row) => {
    dispatch(editRow({ tableId: tableId, row: { id: id, ...row } }));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Form
        mode="edit"
        rowData={editDataWithoutId}
        onSubmit={handleSaveChanges}
      />
    </Modal>
  );
};
