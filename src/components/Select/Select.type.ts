import { BaseSelectProps } from '@mui/material';

type SelectOptionsItem = {
  label: string;
  value: string | number;
};

export type SelectProps = BaseSelectProps & {
  options: Array<SelectOptionsItem>;
};

export type SelectFormItemProps = SelectProps & {
  name: string;
};
