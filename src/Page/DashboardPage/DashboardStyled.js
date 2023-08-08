import styled from 'styled-components';

export const Box = styled.div`

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
       margin: auto;
 
}
  @media screen and (min-width: 1280px) {
    display:flex;
    gap:69px;
}
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
