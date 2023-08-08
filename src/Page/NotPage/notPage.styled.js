import styled from 'styled-components';
import backImg from '../../svg/GradientLogin2x2.png';
export const NotPageSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(16, 16, 16, 1);
  display: block;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;
export const NotPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h2 {
    font-size: 150px;
    margin: 0;
    text-shadow: #fc0 1px 0 10px;
  }
  .link404 {
    text-decoration: none;
    font-weight: bold;
    color: rgb(255 255 255 / 0.6);
    outline: 1px solid rgb(255 255 255 / 0.6);
    padding: 10px;
  }
`;
