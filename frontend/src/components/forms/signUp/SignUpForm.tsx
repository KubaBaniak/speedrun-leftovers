import { useForm, SubmitHandler } from "react-hook-form";
import { FormGroup, Link, Typography, CircularProgress, styled, IconButton, InputAdornment } from "@mui/material";
import SubmitFormButton from "../../buttons/SubmitForm";
import { SignUpFormData } from "../../../types/signUpTypes";
import InputField from "./InputField";
import { SignUpSchema } from "../../../types/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckboxField from "./CheckboxField";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import network from '../../../utils/network';
import { useMutation } from "@tanstack/react-query";

const SUCCESS_SIGNUP_MESSAGE = "You've successfully registered on our website. To complete the registration process, please check your email";

interface ISignUpFormProps {
  closeModalCallback: () => void,
  openSnackbarCallback: (message: string | null) => void,
}

const createUserRequest = async (userData: { email: string, password: string }) => {
  const response = await network.apiClient.post('/users', userData);
  return response.data;
}

export default function SignUpForm({ closeModalCallback, openSnackbarCallback }: ISignUpFormProps) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown(!passwordShown);

  const mutation = useMutation({
    mutationFn: createUserRequest,
    onSuccess: () => {
      closeModalCallback();
      openSnackbarCallback(SUCCESS_SIGNUP_MESSAGE);
    },
    onError: () => {
      openSnackbarCallback("There was an error during registration. Please try again.");
    },
  })

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignUpFormData>({
    mode: "onChange",
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = () => {
    const email = getValues("email");
    const password = getValues("password");
    const userData = { email, password };
    mutation.mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitting ? (
        <StyledCircularProgress />
      ) : (
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
                  {passwordShown ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <CheckboxField
            register={register}
            error={errors.termsAndPrivacyAccepted}
            name={"termsAndPrivacyAccepted"}
            type={""}
            label={""}
            placeholder={""}
          />

          <SubmitContainer>
            <SubmitFormButton text="Create an account" isDisabled={!isValid} />
          </SubmitContainer>
        </StyledFormGroup>
      )}
      <Text>
        Already have an account? <UnderlineLink href="log-in">Login</UnderlineLink>
      </Text>
    </form>
  );
}

const StyledFormGroup = styled(FormGroup)({
  flexDirection: "column",
  gap: "20px",
});

const StyledCircularProgress = styled(CircularProgress)({
  marginBottom: "24px",
});

const Text = styled(Typography)({
  fontSize: "14px",
});

const BoldLink = styled(Link)({
  fontWeight: "500",
});

const SubmitContainer = styled("div")({
  width: "40%",
  marginRight: "auto",
  paddingBottom: "24px",
});

const UnderlineLink = styled(BoldLink)({
  textDecoration: "underline",
});

