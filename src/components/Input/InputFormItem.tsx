import { FC } from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'Components/Input/Input.tsx';

type InputFormItem = TextFieldProps & {
  name: string;
};

export const InputFormItem: FC<InputFormItem> = ({
  name,
  defaultValue,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <Input
          {...field}
          value={field.value}
          onChange={field.onChange}
          {...rest}
        />
      )}
    />
  );
};
