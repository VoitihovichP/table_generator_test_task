import { MenuItem, Select as MuiSelect } from '@mui/material';
import React from 'react';
import cn from 'classnames';

import { SelectProps } from './Select.type.ts';

export const Select = React.forwardRef(
  (
    { value, onChange, options, className, placeholder, ...rest }: SelectProps,
    ref,
  ) => {
    return (
      <MuiSelect
        value={value}
        onChange={onChange}
        ref={ref}
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
    );
  },
);

Select.displayName = 'Select';
