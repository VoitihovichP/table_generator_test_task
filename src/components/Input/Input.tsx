import React, { Ref } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import cn from 'classnames';

import styles from './Input.module.scss';

type InputProps = TextFieldProps;

export const Input = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      variant,
      placeholder,
      className,
      ...rest
    }: InputProps,
    ref,
  ) => {
    return (
      <TextField
        label={label}
        className={cn(styles.customInput, className)}
        variant={variant}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputRef={ref as Ref<HTMLDivElement>}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
