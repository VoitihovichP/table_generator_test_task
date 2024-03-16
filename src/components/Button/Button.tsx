import { FC } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

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
      className={className}
      onClick={onClick}
      {...rest}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};
