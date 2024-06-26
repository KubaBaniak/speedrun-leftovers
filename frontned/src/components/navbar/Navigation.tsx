import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import DropdownMenu from './DropdownMenu';

const NavStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2px;
  width: 40%;
  max-width: 273px;
  height: 40px;
  box-sizing: border-box;
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
  boxShadow:
    '0px 1px 5px 0px #0000001F, 0px 2px 2px 0px #00000024, 0px 3px 1px -2px #00000033',
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
