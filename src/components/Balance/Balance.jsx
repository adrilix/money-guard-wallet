import { useMediaQuery } from 'react-responsive';
import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './BalanceStyled';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'redux/registrationReducer/registrationThunks';

export const Balance = () => {
  const balance = useSelector(selectAuthData);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <div>
      {isDesktop && (
        <StyledBalanceBox>
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>
            {balance.balance}
          </StyledBalance>
        </StyledBalanceBox>
      )}
      {isTablet && (
        <StyledBalanceBox maxW="296px" padL="40px" borR="8px" marB="0px">
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>
            {balance.balance}
          </StyledBalance>
        </StyledBalanceBox>
      )}
    </div>
  );
};
