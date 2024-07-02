import { useForm, SubmitHandler } from "react-hook-form";
import { FormGroup, Link, Typography, styled } from "@mui/material";
import SubmitFormButton from "../../buttons/SubmitForm";
import { SignInFormData } from "../../../types/signInTypes";
import InputField from "./InputField";
import { SignInSchema } from "../../../types/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckboxField from "./CheckboxField";


export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });
  const onSubmit: SubmitHandler<SignInFormData> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <InputField
          type="email"
          label="E-mail address"
          placeholder="Enter your e-mail"
          name="email"
          register={register}
          error={errors.email}
        />
        <InputField
          type="password"
          label="Password"
          placeholder="Create your password"
          name="password"
          register={register}
          error={errors.password}
        />
        <CheckboxField
          register={register}
          error={errors.termsAndPrivacyAccepted}
          type={""}
          label={""}
          placeholder={""}
          name={"termsAndPrivacyAccepted"} />

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

const Text = styled(Typography)({
  fontSize: '14px',
})

const BoldLink = styled(Link)({
  fontWeight: '500',
})

const SubmitContainer = styled('div')({
  width: '40%',
  marginRight: 'auto',
  paddingBottom: '24px',
})

const UnderlineLink = styled(BoldLink)({
  textDecoration: 'underline',
})
