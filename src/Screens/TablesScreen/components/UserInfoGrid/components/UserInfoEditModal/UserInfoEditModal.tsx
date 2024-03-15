import { FC } from 'react';
import { Modal } from 'Components/Modal/Modal.tsx';

type UserInfoEditModalProps = {
  open: boolean;
  onClose: () => void;
};

export const UserInfoEditModal: FC<UserInfoEditModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>aasdasdasdasd</div>
    </Modal>
  );
};
