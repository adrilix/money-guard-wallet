import { createSlice } from "@reduxjs/toolkit"
import { addTransactionsThunk, deleteTransactionsThunk, getTransactionCategoriesThunk, getTransactionsSummaryThunk, getTransactionsThunk, patchTransactionsThunk } from "./transactionsThunks";


const initialState = {
    transactions: [],
    summary: [],
    categories: [],
    isLoading: false,
    error: null,
    filter: ''
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        // findTransaction: (state, action) => {
        //     state.filter = action.payload;
        // }
    },

    extraReducers: builder =>
        builder
            //---------------------- Get transactions summary ------------------------------
            .addCase(getTransactionsSummaryThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTransactionsSummaryThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.summary = action.payload;
            })
            .addCase(getTransactionsSummaryThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //---------------------- Get transactions categories------------------------------
            .addCase(getTransactionCategoriesThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTransactionCategoriesThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(getTransactionCategoriesThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //---------------------- Get transactions ------------------------------
            .addCase(getTransactionsThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTransactionsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.transaction = action.payload;
            })
            .addCase(getTransactionsThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Add transaction ----------------------------------
            .addCase(addTransactionsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addTransactionsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.transactions = [action.payload, ...state.transactions];
            })
            .addCase(addTransactionsThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Patch transaction  ----------------------------------
            .addCase(patchTransactionsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(patchTransactionsThunk.fulfilled, (state,  action) => {
                state.isLoading = false;
                state.transactions = [...state.transactions, action.payload.id]
            })
            .addCase(patchTransactionsThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Delete transaction  ----------------------------------
            .addCase(deleteTransactionsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteTransactionsThunk.fulfilled, (state,  action) => {
                state.isLoading = false;
                state.transactions = state.transactions.filter(
                    transaction => transaction.id !== action.payload.id);
            })
            .addCase(deleteTransactionsThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
})

export const { findContacts } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;