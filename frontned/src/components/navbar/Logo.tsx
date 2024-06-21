import styled from 'styled-components';
import LogoSrc from '../../assets/Leftovers Website Logo.png';

const LogoImage = styled.img.attrs({
  src: `${LogoSrc}`,
})`
  width: 40px;
  height: 40px;
  padding: 3px 4px;
`;

export default function Logo() {
  return <LogoImage></LogoImage>;
}
