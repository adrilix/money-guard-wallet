import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import {
  StyledBox,
  StyledImg,
  StyledOval,
  StyledTBody,
  StyledTable,
  StyledTableHead,
  StyledTd,
  StyledTdBox,
  StyledTh,
  StyledThBox,
} from './CurrencyStyled';
import { currencyThunk } from 'redux/currencyRedusers/currencyThunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  currencySelector,
  isLoadingSelector,
} from 'redux/currencyRedusers/currencySelectors';
import { useMediaQuery } from 'react-responsive';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(currencySelector);
  const isLoading = useSelector(isLoadingSelector);
  const token = useSelector(state => state.auth.token);

  const updateLastUpdatedTime = () => {
    const newTime = Date.now();
    localStorage.setItem('lastUpdatedTime', newTime);
  };

  useEffect(() => {
    if (!token) return;
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');

    const isHourPassed = () => {
      const ONE_HOUR_IN_MS = 60 * 60 * 1000;
      return Date.now() - Number(lastUpdatedTime) >= ONE_HOUR_IN_MS;
    };

    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(currencyThunk());
      setCurrency(selectedCurrency);
      updateLastUpdatedTime();
    } else {
      setCurrency(selectedCurrency);
    }
  }, [dispatch, selectedCurrency, token]);
  console.log(currency);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletAndMobile = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <div>
      {isDesktop && (
        <StyledBox ai="center" jc="center">
          {isLoading ? (
            <>
              <StyledOval
                height={40}
                width={40}
                color="#4a56e2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4a56e2"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            </>
          ) : (
            <StyledBox>
              <StyledTable>
                <StyledTableHead>
                  <StyledThBox>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Purchase</StyledTh>
                    <StyledTh>Sale</StyledTh>
                  </StyledThBox>
                </StyledTableHead>
                <StyledTBody>
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox key={nanoid()}>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                </StyledTBody>
              </StyledTable>
              <img src={require('../../svg/currency.png')} alt="schedule" />
            </StyledBox>
          )}
        </StyledBox>
      )}
      {isTabletAndMobile && (
        <StyledBox maxw="336px">
          {isLoading ? (
            <>
              <StyledOval
                height={40}
                width={40}
                color="#4a56e2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4a56e2"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            </>
          ) : (
            <>
              <StyledTable>
                <StyledTableHead padL="20px" marB="8px">
                  <StyledThBox>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Purchase</StyledTh>
                    <StyledTh>Sale</StyledTh>
                  </StyledThBox>
                </StyledTableHead>
                <StyledTBody padL="20px" gap="12px">
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox key={nanoid()}>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                </StyledTBody>
              </StyledTable>
              <StyledImg
                src={require('../../svg/currency-tablet.png')}
                alt="schedule"
                w="336px"
              />
            </>
          )}
        </StyledBox>
      )}
      {isMobile && (
        <StyledBox maxw="336px">
          {isLoading ? (
            <>
              <StyledOval
                height={40}
                width={40}
                color="#4a56e2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4a56e2"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            </>
          ) : (
            <>
              <StyledTable>
                <StyledTableHead padL="20px" marB="8px">
                  <StyledThBox>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Purchase</StyledTh>
                    <StyledTh>Sale</StyledTh>
                  </StyledThBox>
                </StyledTableHead>
                <StyledTBody padL="20px" gap="12px">
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox key={nanoid()}>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                </StyledTBody>
              </StyledTable>
              <StyledImg
                src={require('../../svg/currency-tablet.png')}
                alt="schedule"
                w="336px"
              />
            </>
          )}
        </StyledBox>
      )}
    </div>
  );
};

export default Currency;
