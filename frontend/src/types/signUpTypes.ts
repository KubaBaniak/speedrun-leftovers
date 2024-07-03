import { ReactNode } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type SignUpFormData = {
  email: string;
  password: string;
  termsAndPrivacyAccepted: boolean;
};

export type SignUpFormFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  name: ValidSignUpInputNames;
  register: UseFormRegister<SignUpFormData>;
  error: FieldError | undefined;
  endAdornment?: ReactNode;
};

export type ValidSignUpInputNames =
  | 'email'
  | 'password'
  | 'termsAndPrivacyAccepted';
