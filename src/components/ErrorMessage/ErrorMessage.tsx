import { FC } from 'react';

import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.errorMessage}>{message}</p>;
};
