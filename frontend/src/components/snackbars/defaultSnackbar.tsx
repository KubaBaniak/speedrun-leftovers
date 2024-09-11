import { IconButton, Snackbar, styled } from '@mui/material';
import { Close } from '@mui/icons-material'
import React from 'react';

interface ISignUpSnackbar {
  open: boolean,
  handleClose: (e: React.SyntheticEvent | Event, reason?: string) => void;
  message: string | null,
}

export default function DefaultSnackbar({ open, handleClose, message }: ISignUpSnackbar) {

  return (
    <StyledSnackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            aria-label="close"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  "& .MuiSnackbarContent-root": {
    color: theme.palette.text.primary,
    backgroundColor: 'white',
    boxShadow: '0 1px 18px 0 #0000001F, 0 6px 10px 0 #00000024, 0 3px 5px -1px #00000033'
  }
}))
