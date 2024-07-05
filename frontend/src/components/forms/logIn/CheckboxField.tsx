import { Checkbox, FormControlLabel, Typography, styled } from "@mui/material";
import ErrorMessage from "../ErrorMessage";
import { LogInFormFieldProps } from "../../../types/logInTypes";

export default function CheckboxField({
  register,
  error,
}: LogInFormFieldProps) {

  return (
    <>
      <FormControlLabel
        control={<Checkbox />}
        label={CheckboxLabel}
        {...register('rememberMe')} />
      {error && <ErrorMessage message={error.message} />}
    </>
  )
}

const Text = styled(Typography)({
  fontSize: '14px',
})

const CheckboxLabel = (
  <Text>
    Remember me
  </Text>
)
