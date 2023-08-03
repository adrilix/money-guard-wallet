import React from 'react';
import PropTypes from 'prop-types';
import { AccountNameStyled, ButtonLogOutStyled, UserMenuStyled } from './UserMenuStyled';

function UserMenu({userName, handleLogOut}) {
    return (
        <UserMenuStyled>
            <AccountNameStyled>
                акаунт <b>{userName}</b>
            </AccountNameStyled>
            <ButtonLogOutStyled onClick={handleLogOut} type="button">
                Log out
            </ButtonLogOutStyled>
        </UserMenuStyled>
    );
}

UserMenu.propTypes = {
    userName: PropTypes.string.isRequired,
    handleLogOut: PropTypes.func.isRequired,
}

export default UserMenu;
