import { Box, Divider, Link, styled } from "@mui/material"
import React from 'react';


const footerRoutes = [
  {
    label: 'Terms of Services',
    path: '/terms-of-services'
  },
  {
    label: 'Privacy Policy',
    path: '/privacy-policy'
  }
]

export default function FooterMenu() {
  return (
    <FooterMenuContainer>
      <ContactEmail >kuba121201@gmail.com</ContactEmail>
      <Divider orientation="vertical" flexItem />
      {
        footerRoutes.map((route, i) => (
          <React.Fragment key={route.path}>
            <FooterMenuItem href={route.path}>
              {route.label}
            </FooterMenuItem>
            {i < footerRoutes.length - 1 && <Divider orientation="vertical" flexItem />}
          </React.Fragment>
        ))
      }
    </FooterMenuContainer>
  )
}

const FooterMenuContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
})

const ContactEmail = styled('p')(({ theme }) => ({
  fontSize: '12px',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
}))

const FooterMenuItem = styled(Link)(({ theme }) => ({
  fontSize: '12px',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
}))

