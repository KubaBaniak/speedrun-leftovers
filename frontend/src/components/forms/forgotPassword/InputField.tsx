import { TextField, styled } from "@mui/material";
import ErrorMessage from "../ErrorMessage";
import { ForgotPasswordFormFieldProps } from "../../../types/forgotPasswordTypes";

export default function InputField({
  type,
  label,
  placeholder,
  name,
  register,
  error,
  endAdornment
}: ForgotPasswordFormFieldProps) {
  return (
    <>
      <TextInput
        required
        type={type}
        label={label}
        placeholder={placeholder}
        {...register(name)}
        InputProps={{
          endAdornment: endAdornment
        }}
      />
      {error && <ErrorMessage message={error.message} />}
    </>
  )
}

const TextInput = styled(TextField)({
  width: '100%',

  color: 'red',
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  }
})
