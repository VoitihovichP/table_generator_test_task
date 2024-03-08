import { FC } from 'react';
import { InputFormItem } from 'Components/Input/InputFormItem.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from 'Components/Button/Button.tsx';
import { SelectFormItem } from 'Components/Select/SelectFormItem.tsx';

import styles from './Form.module.scss';

import { CITIES_LIST } from '@/src/constants/cities.ts';

export const Form: FC = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <form className={styles.form}>
        <div className={styles.form__inputs}>
          <InputFormItem name="userName" placeholder="Name" />
          <InputFormItem name="userSurname" placeholder="Surname" />
          <InputFormItem name="userAge" placeholder="Age" type="number" />
          <SelectFormItem
            name="useCity"
            placeholder="City"
            options={CITIES_LIST}
          />
        </div>
        <Button size="large" variant="contained" fullWidth>
          Add
        </Button>
      </form>
    </FormProvider>
  );
};
