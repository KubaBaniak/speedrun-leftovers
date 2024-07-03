import { TextField, styled } from "@mui/material";
import { SignInFormFieldProps } from "../../../types/signInTypes";
import ErrorMessage from "../ErrorMessage";

export default function InputField({
  type,
  label,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  endAdornment
}: SignInFormFieldProps) {
  return (
    <>
      <TextInput
        type={type}
        label={label}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
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
