import React from 'react';

import picture from '../../svg/lepr-re.png';
import { NotPageSection, NotPageStyled } from './notPage.styled';
import { Link } from 'react-router-dom';
const NotPage = () => {
  return (
    <NotPageSection>
      <NotPageStyled className="text404">
        <h3>Oops!!</h3>
        <h2>404</h2>
        <h3>page not found</h3>
        <Link to={'/'} className="link404">
          Go Home?
        </Link>
      </NotPageStyled>
      <div>
        <img src={picture} alt="logoImg" width="300" />
      </div>
    </NotPageSection>
  );
};

export default NotPage;
