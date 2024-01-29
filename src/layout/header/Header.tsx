import React from 'react';
import styled from 'styled-components';

import Menu from '../../components/menu/Menu';
import Logo from '../../components/logo/Logo';

const ITEMS = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={ITEMS}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
  display: flex;
  justify-content: space-between;
`