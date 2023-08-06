import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import picture from '../../svg/lepr-re.png';
import { NotPageSection, NotPageStyled } from './notPage.styled';
const NotPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <NotPageSection>
      <NotPageStyled className="text404">
        <h3>Oops!!</h3>
        <h2>404</h2>
        <h3>page not found</h3>
      </NotPageStyled>
      <div>
        <img src={picture} alt="logoImg" width="300" />
      </div>
    </NotPageSection>
  );
};

export default NotPage;
