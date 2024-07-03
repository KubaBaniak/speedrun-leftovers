import { Button, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import SignUpModal from "../modals/SignUpModal";

export default function SignUpButton() {
  return <>
    <Link to="?signup=true">
      <SignUp>Sign Up</SignUp>
    </Link>
    <SignUpModal />
  </>
}


const SignUp = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: 'none',
  padding: '6px 16px',
  boxShadow:
    '0px 1px 5px 0px #0000001F, 0px 2px 2px 0px #00000024, 0px 3px 1px -2px #00000033',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));
