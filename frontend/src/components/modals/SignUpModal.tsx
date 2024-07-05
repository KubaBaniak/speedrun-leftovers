import { useState } from 'react';
import { styled, Modal, Typography, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SignUpForm from '../forms/signUp/SignUpForm';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SignUpSnackbar from '../snackbars/signUpSnackbar';

export default function SignUpModal() {
  const [searchParams] = useSearchParams();
  const [snackbarValues, setSnackbarValues] =
    useState<{ open: boolean, errorMessage: string | null }>({ open: false, errorMessage: null });

  const signUp = searchParams.get('signup');

  const navigate = useNavigate();


  const handleClick = (error: string | null) => {
    setSnackbarValues({ open: true, errorMessage: error });
  };

  const handleClose = () => {
    setSnackbarValues({ open: false, errorMessage: null });
  };

  return (
    <>
      <Modal
        open={signUp === 'true'}
        onClose={() => navigate(-1)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <ExitSection>
            <ExitIcon onClick={() => navigate(-1)} />
          </ExitSection>
          <ModalTitle id="modal-modal-title" variant="h6">
            Sign up
          </ModalTitle>
          <ModalDescription>
            Create an account for free
          </ModalDescription>
          <SignUpForm
            closeModalCallback={() => navigate(-1)}
            openSnackbarCallback={handleClick}
          />
        </ModalBox>
      </Modal>
      <SignUpSnackbar
        open={snackbarValues.open}
        handleClose={handleClose}
        errorMessage={snackbarValues.errorMessage}
      />
    </>
  );
}

const ModalBox = styled(Box)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  backgroundColor: 'white',
  padding: '16px 24px',
  borderRadius: 4,
  boxShadow: '0 9px 46px 8px #0000001F, 0 24px 38px 3px #00000024, 0 11px 15px -7px #00000033',
  p: '4',
})

const ModalTitle = styled(Typography)(({ theme }) => ({
  fontSize: 34,
  color: theme.palette.text.primary,
  letterSpacing: 0.25,
  paddingBottom: 24,
}))

const ModalDescription = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.primary,
  paddingBottom: 32,
}))

const ExitSection = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
})

const ExitIcon = styled(ClearIcon)({
  cursor: 'pointer',
})

