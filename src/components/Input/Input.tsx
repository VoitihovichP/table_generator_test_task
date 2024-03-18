import React, { Ref } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import cn from 'classnames';
import { ErrorMessage } from 'Components/ErrorMessage/ErrorMessage.tsx';

import styles from './Input.module.scss';

type InputProps = Omit<TextFieldProps, 'error'> & {
  error?: string | boolean;
};

export const Input = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      variant,
      placeholder,
      error,
      className,
      ...rest
    }: InputProps,
    ref,
  ) => {
    return (
      <div className="input-wrapper">
        <TextField
          label={label}
          className={cn(styles.customInput, className)}
          variant={variant}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          inputRef={ref as Ref<HTMLDivElement>}
          error={!!error}
          {...rest}
        />
        {error && <ErrorMessage message={error as string} />}
      </div>
    );
  },
);

Input.displayName = 'Input';
