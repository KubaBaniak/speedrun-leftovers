import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBar />
      <Navigation />
    </NavbarContainer>
  );
}
