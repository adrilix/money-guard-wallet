import {createAsyncThunk} from "@reduxjs/toolkit"
import { getCurrencyRequest } from "services/currencyApi";

export const currencyThunk = createAsyncThunk ("currency/currencyThunk",
async (_, {rejectWithValue}) => {
  try {
    const data = await getCurrencyRequest ();
    console.log(data);
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});

export const selectCurrencyData = (state) => state.currency.data;