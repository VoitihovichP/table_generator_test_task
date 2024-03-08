import { MenuItem, Select as MuiSelect } from '@mui/material';
import React from 'react';
import cn from 'classnames';

import { SelectProps } from './Select.type.ts';
import styles from './Select.module.scss';

export const Select = React.forwardRef(
  ({ value, onChange, options, className, ...rest }: SelectProps, ref) => {
    return (
      <MuiSelect
        value={value}
        onChange={onChange}
        ref={ref}
        className={cn(styles.customSelect, className)}
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
