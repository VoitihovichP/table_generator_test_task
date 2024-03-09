import { FC, useEffect } from 'react';
import { InputFormItem } from 'Components/Input/InputFormItem.tsx';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'Components/Button/Button.tsx';
import { SelectFormItem } from 'Components/Select/SelectFormItem.tsx';
import { useAppDispatch } from 'Hooks/redux.ts';
import { ITableRowData } from 'Models/table.model.ts';
import { generateUniqueId } from 'Utils/generateUniqueId.ts';

import styles from './Form.module.scss';

import { CITIES_LIST } from '@/src/constants/cities.ts';
import { tableFormSlice } from '@/src/store/reducers/tableFormSlice.ts';
import { tablesSlice } from '@/src/store/reducers/tablesSlice.ts';

export const Form: FC = () => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      surname: '',
      age: '',
      city: '',
    },
  });
  const dispatch = useAppDispatch();

  const { watch, handleSubmit, reset: resetForm } = formMethods;
  const { reset, changeFields } = tableFormSlice.actions;
  const { addRow } = tablesSlice.actions;

  const nameField = watch('name');
  const surnameField = watch('surname');
  const ageField = watch('age');
  const cityField = watch('city');

  const onSubmit: SubmitHandler<ITableRowData> = (row): void => {
    const newRow = {
      id: generateUniqueId(),
      ...row,
    };

    dispatch(reset());
    resetForm();
    dispatch(addRow(newRow));
  };

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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <Button size="large" variant="contained" fullWidth type="submit">
          Add
        </Button>
      </form>
    </FormProvider>
  );
};
