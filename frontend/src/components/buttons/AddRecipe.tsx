import { Button, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddRecipeButton() {
  return <AddRecipe startIcon={<AddIcon />}>Add Recipe</AddRecipe>
}

const AddRecipe = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 8px',
}));
