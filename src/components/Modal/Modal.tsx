import { FC, MouseEventHandler } from 'react';
import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';
import { IconCross } from 'Components/Icons/IconCross/IconCross.tsx';

import styles from './Modal.module.scss';

type ModalProps = MuiModalProps;

export const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <div className={styles.modalBox}>
        {onClose && (
          <button
            onClick={onClose as MouseEventHandler<HTMLButtonElement>}
            className={styles.modalBox__closeBtn}
          >
            <IconCross />
          </button>
        )}
        {children}
      </div>
    </MuiModal>
  );
};
