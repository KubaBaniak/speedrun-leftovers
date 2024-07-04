import { Checkbox, FormControlLabel, Link, Typography, styled } from "@mui/material";
import { SignUpFormFieldProps } from "../../../types/signUpTypes";
import ErrorMessage from "../ErrorMessage";

export default function CheckboxField({
  register,
  name,
  error,
}: SignUpFormFieldProps) {

  return (
    <>
      <FormControlLabel
        control={<Checkbox
          inputProps={{ 'data-testid': `input-${name}` } as React.InputHTMLAttributes<HTMLInputElement>}
        />}
        label={CheckboxLabel}
        {...register('termsAndPrivacyAccepted')} />
      {error && <ErrorMessage message={error.message} />}
    </>
  )
}

const Text = styled(Typography)({
  fontSize: '14px',
})

const BoldLink = styled(Link)({
  fontWeight: '500',
})

const CheckboxLabel = (
  <Text>
    Acceptance of <BoldLink href="terms-and-conditions" target="_blank">Terms & Conditions</BoldLink> and <BoldLink href="privacy-policy" target="_blank">Privacy Policy</BoldLink>
  </Text>
)
