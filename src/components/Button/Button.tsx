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
  color = 'primary',
  fullWidth,
  ...rest
}) => {
  return (
    <MuiButton
      className={cn(className, {
        [styles.customButton_primary]: color === 'primary',
      })}
      onClick={onClick}
      {...rest}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};
