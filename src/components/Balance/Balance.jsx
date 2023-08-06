import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './BalanceStyled';

export const Balance = () => {
  return (
    <StyledBalanceBox>
      <StyledBalanceLabel>Your balance</StyledBalanceLabel>
      <StyledBalance>
        <span>₴</span>24 000.00
      </StyledBalance>
    </StyledBalanceBox>
  );
};
