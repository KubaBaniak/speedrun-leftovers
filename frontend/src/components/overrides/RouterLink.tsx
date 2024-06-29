import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import React from 'react';

const LinkBehaviour = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

export default LinkBehaviour;
