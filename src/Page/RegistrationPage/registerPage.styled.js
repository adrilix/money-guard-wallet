import styled from 'styled-components';
import backImg from '../../svg/GradientRegisterx22.png';
export const LoginSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(16, 16, 16, 1);
`;
export const LoginStyled = styled.div`
  background: radial-gradient(#3f2e96, #5f478c);
  width: 100%;
  height: 100vh;
  position: absolute;
  filter: drop-shadow(0 0 0.75rem black);
  opacity: 0.97;

  @media screen and (min-width: 767px) {
    width: 533px;
    height: 570px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }
  .inner {
    padding: 40px;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logoText {
    font-size: 27px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    color: white;
  }

  .formloginInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 52px 0;
  }
`;
