import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox, FormControlLabel, FormGroup, Link, TextField, Typography, styled } from "@mui/material";
import SubmitFormButton from "../../buttons/SubmitForm";

type Inputs = {
  email: string,
  password: string,
  termsAndPrivacyAccepted: boolean,
};

export default function SignInForm() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <TextInput
          label="E-mail address"
          placeholder="Enter your e-mail"
          {...register('email',)}
        />
        <TextInput
          label="Password"
          placeholder="Create your password"
          {...register('password')}
        />
        <FormControlLabel control={<Checkbox />} label={CheckboxLabel} {...register('termsAndPrivacyAccepted')} />

        <SubmitContainer>
          <SubmitFormButton text="Create an account" />
        </SubmitContainer>
      </StyledFormGroup>
      <Text>
        Already have an account ? <UnderlineLink href="log-in">Login</UnderlineLink>
      </Text>
    </form>
  );
}

const StyledFormGroup = styled(FormGroup)({
  flexDirection: 'column',
  gap: '20px',
})

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

const SubmitContainer = styled('div')({
  width: '40%',
  marginRight: 'auto',
  paddingBottom: '24px',
})

const UnderlineLink = styled(BoldLink)({
  textDecoration: 'underline',
})
