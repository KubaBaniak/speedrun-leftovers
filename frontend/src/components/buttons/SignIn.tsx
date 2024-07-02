import { useState } from 'react';
import { Button, styled } from "@mui/material";
import SignInModal from "../modals/SignInModal";

export default function SignInButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <>
    <SignIn onClick={handleOpen}>Sign In</SignIn>
    <SignInModal openCallback={open} closeCallback={handleClose} />
  </>
}
const SignIn = styled(Button)(({ theme }) => ({
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
