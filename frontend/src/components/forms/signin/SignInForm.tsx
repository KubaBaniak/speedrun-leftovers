import { useForm, SubmitHandler } from "react-hook-form";
import { FormGroup, Link, Typography, CircularProgress, styled, InputAdornment, IconButton } from "@mui/material";
import SubmitFormButton from "../../buttons/SubmitForm";
import { SignInFormData } from "../../../types/signInTypes";
import InputField from "./InputField";
import { SignInSchema } from "../../../types/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckboxField from "./CheckboxField";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";


interface ISignInFormProps {
  closeModalCallback: () => void,
}

export default function SignInForm({ closeModalCallback }: ISignInFormProps) {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<SignInFormData>({
    mode: "onChange",
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormData> = async data => {
    const tempRequest = new Promise<void>(resolve => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000);
    });

    await tempRequest;
    closeModalCallback();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitting ?
        <StyledCircularProgress /> :
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
            type={passwordShown ? "text" : "password"}
            label="Password"
            placeholder="Create your password"
            name="password"
            register={register}
            error={errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisiblity}>
                  {passwordShown ?
                    <Visibility /> :
                    <VisibilityOff />
                  }
                </IconButton>
              </InputAdornment>
            }
          />
          <CheckboxField
            register={register}
            error={errors.termsAndPrivacyAccepted}
            type={""}
            label={""}
            placeholder={""}
            name={"termsAndPrivacyAccepted"} />

          <SubmitContainer>
            <SubmitFormButton text="Create an account" isDisabled={!isValid} />
          </SubmitContainer>
        </StyledFormGroup>
      }
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

const StyledCircularProgress = styled(CircularProgress)({
  marginBottom: '24px',
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
