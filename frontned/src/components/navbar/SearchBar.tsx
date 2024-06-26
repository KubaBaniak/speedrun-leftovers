import { Input, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SearchBarInput = styled(Input)(({ theme }) => ({
  height: '40px',
  width: '40%',
  maxWidth: '570px',
  marginRight: 'auto',
  borderRadius: '4px',
  outline: 'none',
  border: 'solid 1px',
  borderColor: '#0000003B',
  padding: '8px',

  '&:hover:not(.Mui-disabled, .Mui-error):before': {
    borderBottom: 'none',
  },

  input: {
    color: theme.palette.text.secondary,
    '&::placeholder': {
      fontSize: '14px',
    },
  },
}));

export default function SearchBar() {
  return (
    <SearchBarInput
      placeholder="Search"
      endAdornment={
        <InputAdornment position="end">
          <SearchOutlined />
        </InputAdornment>
      }
    />
  );
}
