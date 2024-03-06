import { FC } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = MuiButtonProps;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  fullWidth,
  ...rest
}) => {
  return (
    <MuiButton
      className={cn(styles.customButton, className)}
      onClick={onClick}
      {...rest}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};
