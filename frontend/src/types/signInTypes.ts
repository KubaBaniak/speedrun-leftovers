import { FieldError, UseFormRegister } from 'react-hook-form';

export type SignInFormData = {
  email: string;
  password: string;
  termsAndPrivacyAccepted: boolean;
};

export type SignInFormFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  name: ValidSignInInputNames;
  register: UseFormRegister<SignInFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidSignInInputNames =
  | 'email'
  | 'password'
  | 'termsAndPrivacyAccepted';
