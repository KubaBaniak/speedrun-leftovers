import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import { Link, styled } from '@mui/material';

export default function SocialMediaSection() {
  return (
    <SocialMediaContainer>
      <Link href="https://github.com/KubaBaniak"><GitHubIcon /></Link>
      <Link href="https://www.linkedin.com/in/jakub-urbaniak-941405237/"><StyledLinkedInIcon /></Link>
    </SocialMediaContainer>
  )
}

const SocialMediaContainer = styled(Box)({
  display: 'flex',
  gap: '8px',
})

const StyledLinkedInIcon = styled(LinkedInIcon)({
  color: '#0a66c2',
})
