import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';

interface IMenuItem {
  label: string,
  path: string,
}

interface DropdownMenuProps {
  anchorEl: null | HTMLElement,
  open: boolean,
  handleClose: () => void,
  menuContent: IMenuItem[]
}



export default function DropdownMenu({ anchorEl, open, handleClose, menuContent }: DropdownMenuProps) {

  return (
    <StyledMenu
      id="recipe-navbar-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {menuContent.map((menuItem, i) => (
        <Link href={menuItem.path} key={menuItem.label}>
          <MenuItem onClick={handleClose} disableRipple>
            {menuItem.label}
          </MenuItem>
          {i < menuContent.length - 1 && <Divider sx={{ m: 0 }} />}
        </Link>
      ))}
    </StyledMenu>
  );
}

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
    marginTop: '12px',
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
