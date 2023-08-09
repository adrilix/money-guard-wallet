import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionCategoriesRequest } from 'services/api/transactionCategoriesApi';
import {
  addTransactionsRequest,
  deleteTransactionsRequest,
  getTransactionsRequest,
  getTransactionsSummaryRequest,
  patchTransactionsRequest,
} from 'services/api/transactionsApi';
import { toast } from 'react-toastify';
const notifySuc = text =>
  toast.success(text, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });

const notifyError = text => {
  toast.error(text, {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });
};

export const getTransactionsSummaryThunk = createAsyncThunk(
  'transactions/getTransactionsSummaryThunk',
  async (params, { rejectWithValue }) => {
    try {
      const transactionSummary = await getTransactionsSummaryRequest(params);
      return transactionSummary;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionCategoriesThunk = createAsyncThunk(
  'transactions/getTransactionCategoriesThunk',
  async (_, { rejectWithValue }) => {
    try {
      const transactionCategories = await getTransactionCategoriesRequest();
      return transactionCategories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getTransactionsThunk = createAsyncThunk(
  'transactions/getTransactionsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await getTransactionsRequest();
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addTransactionsThunk = createAsyncThunk(
  'transactions/addTransactionsThunk',
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData);
      const newTransaction = await addTransactionsRequest(formData);
      notifySuc('Transaction completed successfully!');
      return newTransaction;
    } catch (error) {
      notifyError(`Transaction completed with error!`);
      return rejectWithValue(error.message);
    }
  }
);
export const patchTransactionsThunk = createAsyncThunk(
  'transactions/patchTransactionsThunk',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const editTransaction = await patchTransactionsRequest(id, updatedData);
      return editTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTransactionsThunk = createAsyncThunk(
  'transactions/deleteTransactionsThunk',
  async (transactionId, { rejectWithValue }) => {
    try {
      const delTransaction = await deleteTransactionsRequest(transactionId);
      return delTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const selectTransactionsSummary = state => state.transactions.summary;
export const selectCategoriesSummaryName = state =>
  state.transactions.summary.categoriesSummary.name;
export const selectTransactionsCategories = state =>
  state.transactions.categories;
export const selectAllTransactions = state => state.transactions.transactions;

export const selectTransactionsIsLoadingStatus = state =>
  state.transactions.isLoading;
export const selectTransactionsErrorStatus = state => state.transactions.error;
