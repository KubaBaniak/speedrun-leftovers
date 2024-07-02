import { Typography, styled } from "@mui/material";

export default function ErrorMessage({ message }: { message: string | undefined }) {
  return <Error>{message}</Error>
}

const Error = styled(Typography)({
  fontSize: '14px',
  color: 'red'
})
