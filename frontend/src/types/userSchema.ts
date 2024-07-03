import { z, ZodSchema } from 'zod';
import { SignUpFormData } from './signUpTypes';

export const SignUpSchema: ZodSchema<SignUpFormData> = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
  termsAndPrivacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Please read and accept the terms and policy',
  }),
});
