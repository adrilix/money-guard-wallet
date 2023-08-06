import styled from 'styled-components';

export const StyledBalanceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-width: 424px;

  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: 56px;
  margin-bottom: 32px;

  background: rgba(82, 59, 126, 0.6);

  /* Button shadow */
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledBalanceLabel = styled.span`
  color: var(--white-40, rgba(255, 255, 255, 0.4));
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 12);
  text-transform: uppercase;
`;

export const StyledBalance = styled.span`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(30 / 45);
  span {
    font-weight: 400;
  }
`;
