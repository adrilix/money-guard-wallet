import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./contactsThunks";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filter: ''
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        findContacts: (state, action) => {
            state.filter = action.payload;
        }},

    extraReducers: builder =>
        builder
            //---------------------- Get contacts ------------------------------
            .addCase(fetchContactsThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
            })
            .addCase(fetchContactsThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Add Contact ----------------------------------
            .addCase(addContactThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = [action.payload, ...state.contacts];
            })
            .addCase(addContactThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Delete Contact  ----------------------------------
            .addCase(deleteContactThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContactThunk.fulfilled, (state,  action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(
                    contact => contact.id !== action.payload.id);
            })
            .addCase(deleteContactThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
})

export const { findContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;



//--------------------------- для еволюції коду ---------------------------
// .addMatcher(action => action.type.endsWith('/pending'), handlePending)