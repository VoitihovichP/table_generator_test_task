import { FC, useCallback, useEffect } from 'react';
import { InputFormItem } from 'Components/Input/InputFormItem.tsx';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'Components/Button/Button.tsx';
import { SelectFormItem } from 'Components/Select/SelectFormItem.tsx';
import { ITableRowData } from 'Models/table.model.ts';
import cn from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import { createRowValidator } from 'Utils/validations/tableFormValidator.ts';

import styles from './Form.module.scss';

import { CITIES_LIST } from '@/src/constants/cities.ts';

type Field = 'name' | 'surname' | 'age' | 'city';

type CommonProps = {
  onSubmit: (row: ITableRowData) => void;
};

type EditFormProps = CommonProps & {
  mode: 'edit';
  formStyle?: never;
  initialFormValues?: never;
  setFormValues?: never;
  rowData: ITableRowData;
};

type AddFormProps = CommonProps & {
  mode: 'create';
  formStyle: 'vertical' | 'horizontal';
  initialFormValues: ITableRowData | null;
  setFormValues: (values: ITableRowData | null) => void;
  rowData?: never;
};

type FormProps = EditFormProps | AddFormProps;

export const Form: FC<FormProps> = ({
  mode = 'create',
  rowData,
  onSubmit,
  setFormValues,
  initialFormValues,
  formStyle,
}) => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      surname: '',
      age: '',
      city: '',
    },
    resolver: yupResolver(createRowValidator),
  });
  const handleSubmitForm: SubmitHandler<ITableRowData> = useCallback(
    (row) => {
      onSubmit(row);
      if (mode === 'create') {
        reset();
      }
    },
    [mode],
  );

  const { watch, handleSubmit, reset, setValue } = formMethods;

  useEffect(() => {
    if (mode === 'edit' && rowData) {
      reset(rowData);
    }
  }, [mode, rowData]);

  useEffect(() => {
    if (initialFormValues) {
      Object.keys(initialFormValues).forEach((key) => {
        setValue(key as Field, initialFormValues[key]);
      });
    }
  }, [initialFormValues, setValue]);

  // Watch for changes in form values and update the other form accordingly
  useEffect(() => {
    if (setFormValues) {
      const subscription = watch((values) => {
        setFormValues(values as ITableRowData);
      });

      return () => subscription.unsubscribe();
    }
  }, [watch, setFormValues]);

  return (
    <FormProvider {...formMethods}>
      <form
        className={cn(styles.form, {
          [styles.form_createMode]: mode === 'create',
        })}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div
          className={cn(styles.form__inputs, {
            [styles.form__inputs_horizontal]: formStyle === 'horizontal',
          })}
        >
          <InputFormItem name="name" placeholder="Name" />
          <InputFormItem name="surname" placeholder="Surname" />
          <InputFormItem name="age" placeholder="Age" type="number" />
          <SelectFormItem
            name="city"
            placeholder="City"
            options={CITIES_LIST}
          />
        </div>
        <Button size="large" fullWidth type="submit">
          {mode === 'edit' ? 'Edit' : 'Add'}
        </Button>
      </form>
    </FormProvider>
  );
};
