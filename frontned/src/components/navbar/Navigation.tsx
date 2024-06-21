import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  gap: 2px;
  list-style: none;
`;
const NavListItem = styled.li`
  padding: 6px 8px;
`;
const NavText = styled.p<{ $color }>``;
const Button = styled.button`
  border: none;
  background: none;
`;

export default function Navigation() {
  return (
    <NavList>
      <NavListItem>
        <Button>Recipes</Button>
      </NavListItem>
      <NavListItem>
        <Button>Log in</Button>
      </NavListItem>
      <NavListItem>
        <Button>Sign Up</Button>
      </NavListItem>
    </NavList>
  );
}
