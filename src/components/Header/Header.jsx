import React from 'react'
import { Box, ExitButton, ExitIcon, ExitText, HeaderContainer, Logo, LogoBox, LogoName, Name, Stick } from './HeaderStyled';
import logo from '../../svg/logo.svg'
import exit from '../../svg/exit.svg'
function Header() {
  return (
    <HeaderContainer>
      <LogoBox>
        <Logo src={logo} alt="logo" />
        <LogoName>Money Guard</LogoName>
      </LogoBox>
      <Box>
        <Name>Name</Name>
        <Stick />
        <ExitButton id="exit" type="button">
          <ExitIcon src={exit} alt="exit" />
          <ExitText>Exit</ExitText>
        </ExitButton>
      </Box>
    </HeaderContainer>
  );
}

export default Header;
