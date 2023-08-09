import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getCurrencyRequest } from 'services/currencyApi';

const currencyNames = {
  usd: 'USD',
  eur: 'EUR',
};

export const currencyThunk = createAsyncThunk(
  'currency/currencyThunk',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://api.monobank.ua/bank/currency');
      if (res.data?.length) {
        const filteredArray = res.data.filter(
          el =>
            (el.currencyCodeA === 840 && el.currencyCodeB === 980) ||
            (el.currencyCodeA === 978 && el.currencyCodeB === 980)
        );
        const enrichedArray = filteredArray.map(el => ({
          ...el,
          currencyName:
            el.currencyCodeA === 840 ? currencyNames.usd : currencyNames.eur,
        }));
        return enrichedArray;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const selectCurrencyData = state => state.currency.data;
