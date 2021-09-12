import React from 'react';
import { Container, Logo, Menu, MenuItem } from './style';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>dthlabs.com</Logo>
        <Menu>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Container>
    </>
  );
}

export default Navbar;