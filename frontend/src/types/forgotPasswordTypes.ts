import { ReactNode } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type ForgotPasswordFormData = {
  email: string;
};

export type ForgotPasswordFormFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  name: ValidForgotpasswordInputNames;
  register: UseFormRegister<ForgotPasswordFormData>;
  error: FieldError | undefined;
  endAdornment?: ReactNode;
};

export type ValidForgotpasswordInputNames = 'email';
