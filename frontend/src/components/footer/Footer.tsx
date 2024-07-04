import { styled, Box } from '@mui/material';
import SocialMediaSection from './SocialMediaSection';
import FooterMenu from './FooterMenu';
import PowerBySection from './PoweredBySection';

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaSection />
      <FooterMenu />
      <PowerBySection />
    </FooterContainer>
  )
}


const FooterContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 36px',
  position: 'fixed',
  bottom: '0px',
  width: '100%',
  height: '56px',
  gap: '32px',
})
