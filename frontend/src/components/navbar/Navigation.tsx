import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LogInButton from '../buttons/LogIn';
import SignInButton from '../buttons/SignIn';
import AddRecipeButton from '../buttons/AddRecipe';
import AllRecipesMenu from './AllRecipesMenu';
import UserAccountMenu from './UserAccountMenu';

//temp solution
const isLoggedIn = true;

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
            <SignInButton />
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
