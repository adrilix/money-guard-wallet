import {createAsyncThunk} from "@reduxjs/toolkit"
import { getUserCurrentDataRequest, logInRequest, logOutRequest, registerRequest, setToken } from "services/api/userApi";

export const registerThunk = createAsyncThunk ("user/registerThunk",
async (formData, {rejectWithValue}) => {
  try {
    const data = await registerRequest(formData);
    console.log(data);
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});
export const logInThunk = createAsyncThunk ("user/logInThunk",
async (formData, {rejectWithValue}) => {
  try {
    const data = await logInRequest(formData);
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});

export const logOutThunk = createAsyncThunk ("user/logOutThunk",
async (_, {rejectWithValue}) => {
  try {
    const data = await logOutRequest();
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk ("user/refreshUserThunk",
async (_, thunkAPI) => {
  const state =  thunkAPI.getState();
  const token = state.user.token;
  try {
      setToken(token)
    const data = await getUserCurrentDataRequest();
    return data;
  } catch ( error ) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const selectAllContacts = (state) => state.phonebook.contacts.items;
// export const selectIsLoadingStatus = (state) => state.phonebook.contacts.isLoading;
// export const selectErrorStatus = (state) => state.phonebook.contacts.error;
// export const selectFilter = (state) => state.phonebook.filter;


