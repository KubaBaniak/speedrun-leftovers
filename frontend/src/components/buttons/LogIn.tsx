import { Button, Link, styled } from "@mui/material";
import LogInModal from "../modals/LogInModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";

export default function LogInButton() {
  return <>
    <Link href="?login=true">
      <LogIn>Log in</LogIn>
    </Link >
    <LogInModal />
    <ForgotPasswordModal />
  </>
}

const LogIn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 8px',
}));
