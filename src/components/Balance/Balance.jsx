import { useMediaQuery } from 'react-responsive';
import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './BalanceStyled';

export const Balance = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <div>
      {isDesktop && (
        <StyledBalanceBox>
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>24 000.00
          </StyledBalance>
        </StyledBalanceBox>
      )}
      {isTablet && (
        <StyledBalanceBox maxW="296px" padL="40px" borR="8px" marB="0px">
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>24 000.00
          </StyledBalance>
        </StyledBalanceBox>
      )}
    </div>
  );
};
