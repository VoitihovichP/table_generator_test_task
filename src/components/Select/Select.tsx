import { MenuItem, Select as MuiSelect } from '@mui/material';
import React from 'react';
import cn from 'classnames';
import { ErrorMessage } from 'Components/ErrorMessage/ErrorMessage.tsx';

import { SelectProps } from './Select.type.ts';

export const Select = React.forwardRef(
  (
    {
      value,
      onChange,
      options,
      className,
      placeholder,
      error,
      ...rest
    }: SelectProps,
    ref,
  ) => {
    return (
      <div className="select-wrapper">
        <MuiSelect
          value={value}
          onChange={onChange}
          ref={ref}
          error={!!error}
          className={cn(className, 'mui-select')}
          displayEmpty
          {...rest}
        >
          <MenuItem className="muiSelect-placeholderWrapper" disabled value="">
            <p className="muiSelect-placeholder">{placeholder}</p>
          </MenuItem>
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MuiSelect>
        {error && <ErrorMessage message={error as string} />}
      </div>
    );
  },
);

Select.displayName = 'Select';
