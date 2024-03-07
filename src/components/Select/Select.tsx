import { MenuItem, Select as MuiSelect } from '@mui/material';
import React from 'react';

import { SelectProps } from './Select.type.ts';

export const Select = React.forwardRef(
  ({ value, onChange, label, options, ...rest }: SelectProps, ref) => {
    return (
      <MuiSelect
        value={value}
        label={label}
        onChange={onChange}
        ref={ref}
        {...rest}
      >
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
