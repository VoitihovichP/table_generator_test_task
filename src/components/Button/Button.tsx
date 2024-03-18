import React, { Ref } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type ButtonProps = MuiButtonProps;

export const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      variant = 'contained',
      className,
      fullWidth,
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <MuiButton
        variant={variant}
        className={className}
        onClick={onClick}
        {...rest}
        ref={ref}
        fullWidth={fullWidth}
      >
        {children}
      </MuiButton>
    );
  },
);

Button.displayName = 'Button';
