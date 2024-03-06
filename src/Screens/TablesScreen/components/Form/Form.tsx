import { FC } from 'react';
import { InputFormItem } from 'Components/Input/InputFormItem.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from 'Components/Button/Button.tsx';

import styles from './Form.module.scss';

export const Form: FC = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <form className={styles.form}>
        <div className={styles.form__inputs}>
          <InputFormItem name="userName" placeholder="Name" />
          <InputFormItem name="userSurname" placeholder="Surname" />
          <InputFormItem name="userAge" placeholder="Age" type="number" />
        </div>
        <Button size="large" variant="contained" fullWidth>
          Add
        </Button>
      </form>
    </FormProvider>
  );
};
