import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { StyledNavAndBalanceBox, StyledSideBox } from './SideBar.styled';
import { useMediaQuery } from 'react-responsive';

export const SideBar = () => {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.7 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <div>
      {isDesktop && (
        <StyledSideBox>
          <StyledNavAndBalanceBox>
            <Navigation />
            <Balance />
          </StyledNavAndBalanceBox>
          <Currency />
        </StyledSideBox>
      )}

      {isTablet && (
        <StyledSideBox
          display="flex"
          flexDirection="row"
          gap="32px"
          marB="40px"
          w="768px"
        >
          <StyledNavAndBalanceBox maxW="336px">
            <Navigation />
            <Balance />
          </StyledNavAndBalanceBox>
          <Currency />
        </StyledSideBox>
      )}
      {isMobile && (
        <StyledSideBox>
          <Navigation />
        </StyledSideBox>
      )}
    </div>
  );
};
