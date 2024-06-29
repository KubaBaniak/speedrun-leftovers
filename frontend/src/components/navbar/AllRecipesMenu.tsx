import { useState } from 'react';
import { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropdownMenu from './DropdownMenu';

const menuContent = [
  { label: 'All Recipes', path: '/all-recipes' },
  { label: 'Breakfasts', path: '/breakfasts' },
  { label: 'Soups', path: '/soups' },
  { label: 'Lunch', path: '/lunch' },
  { label: 'Baking', path: '/baking' },
  { label: 'Desserts', path: '/desserts' },
  { label: 'Drinks', path: '/drinks' },
  { label: 'Snacks', path: '/snacks' },
  { label: 'Salads', path: '/salads' },
];

export default function AllRecipesMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DropdownButton
        id="recipe-navbar"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Recipes
      </DropdownButton>
      <DropdownMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menuContent={menuContent} />
    </>
  );
}

const DropdownButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.text.secondary,
  textTransform: 'none',
  padding: '6px 8px',
  '&:hover': {
    borderRadius: '4px',
    backgroundColor: '#0000000A',
  },
}));
