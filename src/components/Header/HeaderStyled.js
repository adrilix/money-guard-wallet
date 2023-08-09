import styled from "styled-components";

export const HeaderContainer = styled.header`
background: linear-gradient(276deg, #2E1746 3.19%, #2E225F 100%);
box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25), 0px -3px 2px 0px rgba(0, 0, 0, 0.10) inset;

`;
export const Div = styled.div`
`;

export const HeaderDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

    @media (max-width: 767px) {
      width: calc(100% - 40px);
      padding: 0 20px;
      margin: 0 auto;
      height: 60px;
      /* position: fixed;
      top: 0;
      width: 100%; */

    @media screen and (min-width: 480px){
    width: 440px;
  }


   @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    padding: 0 32px;
    width: 704px;
    margin: 0 auto
   }

    @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 1244px;
    margin: 0 auto
    }
`;

export const LogoBox = styled.button`
  padding:16px 16px 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0); /* Прозорий фон (встановіть кольори на свій розсуд) */
  border: none;
  @media (max-width: 767px) {
    padding: 12px 0;
    margin-right: auto;
  }
`;

export const Logo = styled.img`
  width: 17.881px;
  height: 21.572px;
`;

export const LogoName = styled.span`
    color: #FBFBFB;

    font-size: 17.097px;
`;

export const Box = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`;

export const Name = styled.p`
  color: rgba(255, 255, 255, 0.60);
    text-align: right;

    font-size: 16px;
    margin: 0;
    margin-right: 12px;
        @media (max-width: 767px) {
      margin-right: 8px;
  }
`;

export const Stick = styled.div`
  height: 30px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.60);
  margin-right: 12px;
 @media (max-width: 767px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 100%;
  transition: all 400ms;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }

   @media screen and (max-width: 767px) {
    padding: 28px 0;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
     width: 50px;}
  
`;

export const ExitIcon = styled.img`
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {

  margin-right: 8px;
  }
`;

export const ExitText = styled.p`
    color:rgba(255, 255, 255, 0.60);
    text-align: right;
    font-size: 16px;
    @media (max-width: 767px) {
    display:none;
  }
`;