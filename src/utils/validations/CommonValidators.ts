import * as yup from 'yup';
import { AnyObject, StringSchema } from 'yup';

export const MaxStringLengthValidator = (
  maxLength: number,
): StringSchema<string | undefined, AnyObject, undefined, ''> =>
  yup.string().max(maxLength, `Must not exceed ${maxLength} characters`);
