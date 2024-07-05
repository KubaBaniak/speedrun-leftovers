import { z, ZodSchema } from 'zod';
import { SignUpFormData } from './signUpTypes';
import { LogInFormData } from './logInTypes';
import { ForgotPasswordFormData } from './forgotPasswordTypes';

export const SignUpSchema: ZodSchema<SignUpFormData> = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
  termsAndPrivacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Please read and accept the terms and policy',
  }),
});

export const LogInSchema: ZodSchema<LogInFormData> = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
  rememberMe: z.boolean().optional(),
});

export const ForgotPasswordSchema: ZodSchema<ForgotPasswordFormData> = z.object(
  {
    email: z.string().email(),
  },
);
