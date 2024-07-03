import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LogInButton from '../buttons/LogIn';
import SignUpButton from '../buttons/SignUp';
import AddRecipeButton from '../buttons/AddRecipe';
import AllRecipesMenu from './AllRecipesMenu';
import UserAccountMenu from './UserAccountMenu';

//temp solution
const isLoggedIn = false;

export default function Navigation() {
  return (

    <NavStack>
      {
        isLoggedIn ?
          <>
            <AddRecipeButton />
            <AllRecipesMenu />
            <UserAccountMenu />
          </>
          :
          <>
            <AllRecipesMenu />
            <LogInButton />
            <SignUpButton />
          </>
      }
    </NavStack>
  );
}

const NavStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  height: 40px;
  height: 32px;
  font-size: 14px;
`;
