import { createSlice } from "@reduxjs/toolkit"
import { currencyThunk } from "./currencyThunk";


const initialState = {
    data: [],
    isLoading: false,
    error: null,
    filter: ''
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        // findTransaction: (state, action) => {
        //     state.filter = action.payload;
        // }
    },

    extraReducers: builder =>
        builder
            //---------------------- Get currency ------------------------------
            .addCase(currencyThunk.pending, (state,) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(currencyThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(currencyThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
})

// export const { findcurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;