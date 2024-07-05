import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CancelButton() {
  const navigate = useNavigate()

  return <>
    <Cancel onClick={() => navigate(-1)}>Cancel</Cancel>
  </>
}

const Cancel = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'none',
  padding: '6px 16px',
  border: 'solid 1px #43A04780'
}));
