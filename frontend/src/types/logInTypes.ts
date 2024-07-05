import { ReactNode } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type LogInFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type LogInFormFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  name: ValidLogInInputNames;
  register: UseFormRegister<LogInFormData>;
  error: FieldError | undefined;
  endAdornment?: ReactNode;
};

export type ValidLogInInputNames = 'email' | 'password' | 'rememberMe';
