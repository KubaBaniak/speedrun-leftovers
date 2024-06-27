import LogoSrc from '../../assets/Leftovers Website Logo.png';
import { styled } from '@mui/material';

export default function Logo() {
  return <LogoImage src={LogoSrc} />;
}

const LogoImage = styled('img')({
  width: '40px',
  height: '40px',
  padding: '3px 4px',
});
