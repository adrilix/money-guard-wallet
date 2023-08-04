import { createAsyncThunk } from "@reduxjs/toolkit"
import { getTransactionCategoriesRequest } from "services/api/transactionCategoriesApi";
import { addTransactionsRequest, deleteTransactionsRequest, getTransactionsRequest, patchTransactionsRequest } from "services/api/transactionsApi";


export const getTransactionCategoriesThunk = createAsyncThunk("transactions/getTransactionCategoriesThunk",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await getTransactionCategoriesRequest ();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const getTransactionsThunk = createAsyncThunk("transactions/getTransactionsThunk",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await getTransactionsRequest ();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const addTransactionsThunk = createAsyncThunk("transactions/addTransactionsThunk",
    async (formData, { rejectWithValue }) => {
        try {
            const newContact = await addTransactionsRequest(formData);
            return newContact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const patchTransactionsThunk = createAsyncThunk("transactions/patchTransactionsThunk",
async (transactionId, { rejectWithValue }) => {
    try {
        const newContact = await patchTransactionsRequest(transactionId);
        return newContact;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
export const deleteTransactionsThunk = createAsyncThunk("transactions/deleteTransactionsThunk",
    async (transactionId, { rejectWithValue }) => {
        try {
            const delContact = await deleteTransactionsRequest(transactionId);
            return delContact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });