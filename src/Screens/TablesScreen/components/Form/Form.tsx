import { FC, useCallback, useEffect } from 'react';
import { InputFormItem } from 'Components/Input/InputFormItem.tsx';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'Components/Button/Button.tsx';
import { SelectFormItem } from 'Components/Select/SelectFormItem.tsx';
import { useAppDispatch } from 'Hooks/redux.ts';
import { ITableRowData } from 'Models/table.model.ts';
import cn from 'classnames';

import styles from './Form.module.scss';

import { CITIES_LIST } from '@/src/constants/cities.ts';
import { tableFormSlice } from '@/src/store/reducers/tableFormSlice.ts';

type CommonProps = {
  onSubmit: (row: ITableRowData) => void;
};

type EditFormProps = CommonProps & {
  mode: 'edit';
  rowData: ITableRowData;
};

type AddFormProps = CommonProps & {
  mode: 'create';
  rowData?: never;
};

type FormProps = EditFormProps | AddFormProps;

export const Form: FC<FormProps> = ({ mode = 'create', rowData, onSubmit }) => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      surname: '',
      age: '',
      city: '',
    },
  });
  const dispatch = useAppDispatch();

  const handleSubmitForm: SubmitHandler<ITableRowData> = useCallback(
    (row) => {
      onSubmit(row);
      if (mode === 'create') {
        reset();
      }
    },
    [mode],
  );

  const { watch, handleSubmit, reset } = formMethods;
  const { changeFields } = tableFormSlice.actions;

  const nameField = watch('name');
  const surnameField = watch('surname');
  const ageField = watch('age');
  const cityField = watch('city');

  useEffect(() => {
    if (mode === 'edit' && rowData) {
      reset(rowData);
    }
  }, [mode, rowData]);

  useEffect(() => {
    dispatch(changeFields({ field: 'name', value: nameField }));
  }, [nameField]);

  useEffect(() => {
    dispatch(changeFields({ field: 'surname', value: surnameField }));
  }, [surnameField]);

  useEffect(() => {
    dispatch(changeFields({ field: 'age', value: ageField }));
  }, [ageField]);

  useEffect(() => {
    dispatch(changeFields({ field: 'city', value: cityField }));
  }, [cityField]);

  return (
    <FormProvider {...formMethods}>
      <form
        className={cn(styles.form, {
          [styles.form_createMode]: mode === 'create',
        })}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className={styles.form__inputs}>
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
