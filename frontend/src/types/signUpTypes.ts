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
  name: ValidSignUpUpputNames;
  register: UseFormRegister<SignUpFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  endAdornment?: ReactNode;
};

export type ValidSignUpUpputNames =
  | 'email'
  | 'password'
  | 'termsAndPrivacyAccepted';
