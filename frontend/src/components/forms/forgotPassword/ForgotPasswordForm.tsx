import { useForm, SubmitHandler } from "react-hook-form";
import { FormGroup, Link, Typography, CircularProgress, styled } from "@mui/material";
import SubmitFormButton from "../../buttons/SubmitForm";
import InputField from "./InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordFormData } from "../../../types/forgotPasswordTypes";
import { ForgotPasswordSchema } from "../../../types/userSchema";
import CancelButton from "../../buttons/Cancel";


interface IForgotPasswordFormProps {
  closeModalCallback: () => void,
}

export default function ForgotPasswordForm({ closeModalCallback }: IForgotPasswordFormProps) {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<ForgotPasswordFormData>({
    mode: "onChange",
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async data => {
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
          <SubmitContainer>
            <CancelButton />
            <SubmitFormButton text="Send e-mail" isDisabled={!isValid} />
          </SubmitContainer>
        </StyledFormGroup>
      }
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

const SubmitContainer = styled('div')({
  width: '100%',
  paddingBottom: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
})

