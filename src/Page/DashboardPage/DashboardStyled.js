import styled from 'styled-components';

export const Box = styled.div`

outline: 1px solid red;
  position: relative;

  @media screen and (max-width: 768px){
    padding: 0 20px;
    max-width: 440px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 0 32px;
    max-width: 704px;
    margin: 0 auto;

    display: block;

 
}
  @media screen and (min-width: 1280px) {
   padding-right: 16px;
    width: 1264px;
    margin: 0 auto;
    display:flex;
    gap:69px;
}
`;

export const BtnRightCorner = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
`;


export const BoxTableList = styled.div`


    @media screen and (min-width: 768px) and (max-width: 1279px) {
  width: 704px;
  display: block;
}
  
  @media screen and (min-width: 1280px) {
  width: 715px;
  display: flex;
  padding-top: 46px;
  flex-direction: column;
    }
`;
