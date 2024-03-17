import * as yup from 'yup';

export const createRowValidator = yup.object().shape({
  name: yup.string().required('Required field'),
  surname: yup.string().required('Required field'),
  age: yup.string().required('Required field'),
  city: yup.string().required('Required field'),
});
