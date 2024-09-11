import { styled, Modal, Typography, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LogInForm from '../forms/logIn/LogInForm';

export default function LogInModal() {
  const [searchParams] = useSearchParams();

  const logInQueryValue = searchParams.get('login');

  const navigate = useNavigate();

  return (
    <>
      <Modal
        open={logInQueryValue === 'true'}
        onClose={() => navigate(-1)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <ExitSection>
            <ExitIcon onClick={() => navigate(-1)} />
          </ExitSection>
          <ModalTitle id="modal-modal-title" variant="h6">
            Log In
          </ModalTitle>
          <LogInForm
            closeModalCallback={() => navigate(-1)}
          />
        </ModalBox>
      </Modal>
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

const ExitSection = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
})

const ExitIcon = styled(ClearIcon)({
  cursor: 'pointer',
})

