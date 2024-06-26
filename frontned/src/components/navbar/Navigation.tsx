import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import DropdownMenu from './DropdownMenu';

const NavStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  width: 35%;
  max-width: 273px;
  height: 40px;
  box-sizing: content-box;
  height: 32px;
  font-size: 14px;
`;

const LogInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 8px',
}));

const SignInButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: 'none',
  padding: '6px 16px',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export default function Navigation() {
  return (
    <NavStack>
      <DropdownMenu />
      <LogInButton>Log in</LogInButton>
      <SignInButton>Sign up</SignInButton>
    </NavStack>
  );
}
