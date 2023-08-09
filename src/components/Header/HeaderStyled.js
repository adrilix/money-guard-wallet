import styled from "styled-components";

export const HeaderContainer = styled.header`
background: linear-gradient(276deg, #2E1746 3.19%, #2E225F 100%);
box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25), 0px -3px 2px 0px rgba(0, 0, 0, 0.10) inset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
  background-color: white;

    @media (max-width: 767px) {
      position:relative;
    z-index: 3000;
  }
`;

export const LogoBox = styled.div`
  margin:16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 17.881px;
  height: 21.572px;
`;

export const LogoName = styled.span`
    color: #FBFBFB;
    font-family: Poppins;
    font-size: 17.097px;
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right:16px
`;

export const Name = styled.p`
  color: rgba(255, 255, 255, 0.60);
    text-align: right;
    font-family: Poppins;
    font-size: 16px;
    margin-right: 12px;
`;

export const Stick = styled.div`
  height: 30px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.60);
  margin-right: 12px;
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

  &:hover {
    transform: scale(1.1);
  }
`;

export const ExitIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const ExitText = styled.p`
    color:rgba(255, 255, 255, 0.60);
    text-align: right;
    font-family: Poppins;
    font-size: 16px;
`;