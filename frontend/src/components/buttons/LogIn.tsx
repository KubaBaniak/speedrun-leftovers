import { Button, styled } from "@mui/material";

export default function LogInButton() {
  return <LogIn>Log in</LogIn>
}

const LogIn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 8px',
}));
