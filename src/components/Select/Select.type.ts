import { BaseSelectProps } from '@mui/material';
import { SelectOption } from 'Models/select.model.ts';

export type SelectProps = Omit<BaseSelectProps, 'error'> & {
  options: Array<SelectOption>;
  error?: string | boolean;
};

export type SelectFormItemProps = SelectProps & {
  name: string;
};
