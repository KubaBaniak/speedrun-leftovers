import { z, ZodSchema } from 'zod';
import { SignInFormData } from './signInTypes';

export const SignInSchema: ZodSchema<SignInFormData> = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
  termsAndPrivacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Please read and accept the terms and policy',
  }),
});
