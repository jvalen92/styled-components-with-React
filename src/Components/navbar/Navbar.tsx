import React from 'react';
import { Container, ItemStyled, Logo, Menu, MenuItem } from './style';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>dthlabs.com</Logo>
        <Menu>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          <ItemStyled 
            color={'white'}
            background={'palevioletred'}
            border={true}
          >
            Styled item
          </ItemStyled>
        </Menu>
      </Container>
    </>
  );
}

export default Navbar;