import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { Box, styled } from '@mui/material';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBar />
      <Navigation />
    </NavbarContainer>
  );
}

const NavbarContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '12px 36px',
  backgroundColor: '#FEFEFE',
});
