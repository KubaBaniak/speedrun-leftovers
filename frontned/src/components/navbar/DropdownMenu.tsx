import { useState } from 'react';
import { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Divider } from '@mui/material';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: '0',
    boxShadow:
      '0 3px 14px 2px #0000001F, 0 8px 10px 1px #00000024, 0 5px 5px -3px #00000033',
    '& .MuiMenu-list': {
      '& .MuiDivider-root': {
        margin: '0 0',
      },
      '& .MuiMenuItem-root': {
        color: theme.palette.text.primary,
        width: '220px',
        padding: '6px 16px',
      },
    },
  },
}));

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

export default function DropdownMenu() {
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
      <StyledMenu
        id="recipe-navbar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          🍽️ All Recipes
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🥪 Breakfasts
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🍲 Soups
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🍔 Lunch
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🥐 Baking
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🧁 Desserts
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🍹 Drinks
        </MenuItem>
        <Divider sx={{ m: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🍿 Snacks
        </MenuItem>
        <Divider sx={{ mt: 0, mb: 0 }} />
        <MenuItem onClick={handleClose} disableRipple>
          🥗 Salads
        </MenuItem>
      </StyledMenu>
    </>
  );
}
