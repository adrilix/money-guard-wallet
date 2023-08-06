import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { StyledBox, StyledOval, StyledTable } from './CurrencyStyled';
import { currencyThunk } from 'redux/currencyRedusers/currencyThunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  currencySelector,
  isLoadingSelector,
} from 'redux/currencyRedusers/currencySelectors';

const Currency = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(currencySelector);
  const isLoading = useSelector(isLoadingSelector);

  const updateCurrentTime = () => {
    const newTime = Date.now();
    setCurrentTime(newTime);
    localStorage.setItem('lastUpdatedTime', currentTime);
  };

  useEffect(() => {
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');

    const isHourPassed = () => {
      const ONE_HOUR_IN_MS = 60 * 60 * 1000;
      return Date.now() - Number(lastUpdatedTime) >= ONE_HOUR_IN_MS;
    };

    setTimeout(() => {
      if (isHourPassed() || !lastUpdatedTime) {
        dispatch(currencyThunk());
        updateCurrentTime();
      } else {
        setCurrency(selectedCurrency);
      }
    }, 1500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(currency);
  console.log(currentTime);

  return isLoading ? (
    <StyledBox ai="center" jc="center">
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
    </StyledBox>
  ) : (
    <StyledBox>
      <StyledTable>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {currency?.length &&
            currency.map(el => {
              return (
                <tr key={nanoid()}>
                  <td>{el.currencyName}</td>
                  <td>{el.rateBuy}</td>
                  <td>{el.rateSell.toString().slice(0, -2)}</td>
                </tr>
              );
            })}
        </tbody>
      </StyledTable>
    </StyledBox>
  );
};

export default Currency;
