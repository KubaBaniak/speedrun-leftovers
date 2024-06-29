import { styled } from "@mui/material";

export default function PowerBySection() {
  return (
    <TextSection>
      Powered by <DecoratedText>BotAI</DecoratedText>
    </TextSection>
  )
}

const TextSection = styled('p')(({ theme }) => ({
  marginLeft: 'auto',
  fontSize: '12px',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
}))

const DecoratedText = styled('span')({
  textDecoration: 'underline',
})
