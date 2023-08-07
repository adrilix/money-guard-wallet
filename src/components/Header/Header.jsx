import React, { useState } from 'react';
import { Box, ExitButton, ExitIcon, ExitText, HeaderContainer, Logo, LogoBox, LogoName, Name, Stick } from './HeaderStyled';
import logo from '../../svg/logo.svg';
import exit from '../../svg/exit.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk, selectAuthData } from 'redux/registrationReducer/registrationThunks';
import { LogOutModal } from 'components/LogOutModal/LogOutModal';

function Header() {
  // const name= useSelector(selectAuthData);
const [showIt, setShowIt] = useState(false);
  const dispatch = useDispatch();

  const showLogOutModal = () => {
    setShowIt(true);
  };

  const handleLogOut = () => {
    dispatch(logOutThunk());
    setShowIt(false);
  };


  return (
   <> <HeaderContainer>
      <LogoBox>
        <Logo src={logo} alt="logo" />
        <LogoName>Money Guard</LogoName>
      </LogoBox>
      <Box>
        {/* {name && <Name></Name>} */}
        <Stick />
        <ExitButton id="exit" type="button" onClick={showLogOutModal}>
          <ExitIcon src={exit} alt="exit" />
          <ExitText>Exit</ExitText>
        </ExitButton>
      </Box>
    </HeaderContainer>
    <LogOutModal showIt={showIt} setShowIt={setShowIt} handleLogOut={handleLogOut} /></>
  );
}

export default Header;
