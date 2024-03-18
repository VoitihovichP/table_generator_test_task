import { FC } from 'react';
import { SelectFormItemProps } from 'Components/Select/Select.type.ts';
import { Controller, useFormContext } from 'react-hook-form';
import { Select } from 'Components/Select/Select.tsx';

export const SelectFormItem: FC<SelectFormItemProps> = ({
  name,
  defaultValue,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <Select
          {...field}
          value={field.value}
          onChange={field.onChange}
          {...rest}
          error={errorMessage}
        />
      )}
    />
  );
};
