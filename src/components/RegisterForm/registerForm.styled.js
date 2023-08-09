import styled from 'styled-components';
export const RegisterFormS = styled.div`
  .loginRegForm {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .boxLogin {
      position: relative;
      .iconReg {
        position: absolute;
        left: 5px;
        top: 30px;
        font-size: 24px;
        color: rgb(255 255 255 / 0.6);
      }
    }
    .witeButton {
      width: 280px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 20px;
      padding: 5px 10px;
      margin: 10px 15px;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      background-color: #ffffff;
      color: #623f8b;
    }
    .passBar {
      position: absolute;
      top: -22px;
      left: 0;
    }
    .errorMSg {
      bottom: 20px;
    }
  }
`;
