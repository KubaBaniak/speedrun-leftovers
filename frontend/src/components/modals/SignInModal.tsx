import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SignInForm from '../forms/signin/SignInForm';

interface ISignInModalProps {
  openCallback: boolean,
  closeCallback: () => void,
}

export default function SignInModal({ openCallback, closeCallback }: ISignInModalProps) {
  return (
    <Modal
      open={openCallback}
      onClose={closeCallback}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <ExitSection>
          <ExitIcon onClick={closeCallback} />
        </ExitSection>
        <ModalTitle id="modal-modal-title" variant="h6">
          Sign up
        </ModalTitle>
        <ModalDescription>
          Create an account for free
        </ModalDescription>
        <SignInForm closeModalCallback={closeCallback} />
      </ModalBox>
    </Modal>
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
