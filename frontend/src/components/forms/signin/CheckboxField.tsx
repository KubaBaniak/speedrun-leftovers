import { Checkbox, FormControlLabel, Link, Typography, styled } from "@mui/material";
import { SignInFormFieldProps } from "../../../types/signInTypes";
import ErrorMessage from "../ErrorMessage";

export default function CheckboxField({
  register,
  error,
}: SignInFormFieldProps) {

  return (
    <>
      <FormControlLabel
        control={<Checkbox />}
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
    Acceptance of <BoldLink href="terms-and-conditions">Terms & Conditions</BoldLink> and <BoldLink href="privacy-policy">Privacy Policy</BoldLink>
  </Text>
)
