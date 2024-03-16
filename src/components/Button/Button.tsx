import { FC } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type ButtonProps = MuiButtonProps;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'contained',
  className,
  fullWidth,
  ...rest
}) => {
  return (
    <MuiButton
      variant={variant}
      className={className}
      onClick={onClick}
      {...rest}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};
