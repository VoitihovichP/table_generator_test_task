import * as yup from 'yup';
import { MaxStringLengthValidator } from 'Utils/validations/CommonValidators.ts';

export const createRowValidator = yup.object().shape({
  name: MaxStringLengthValidator(100).required('Required field'),
  surname: MaxStringLengthValidator(100).required('Required field'),
  age: yup
    .string()
    .required('Required field')
    .test(
      'greaterThanZero',
      'Must be greater than 0',
      (value) => Number(value) > 0,
    ),
  city: yup.string().required('Required field'),
});
