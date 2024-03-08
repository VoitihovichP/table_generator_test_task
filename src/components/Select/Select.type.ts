import { BaseSelectProps } from '@mui/material';
import { SelectOption } from 'Models/select.model.ts';

export type SelectProps = BaseSelectProps & {
  options: Array<SelectOption>;
};

export type SelectFormItemProps = SelectProps & {
  name: string;
};
