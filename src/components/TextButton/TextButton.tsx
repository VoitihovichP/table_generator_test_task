import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import styles from './TextButton.module.scss';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'error';
}

export const TextButton: FC<TextButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <button
      className={cn(styles.textButton, {
        [styles.textButton_primary]: variant === 'primary',
        [styles.textButton_error]: variant === 'error',
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
