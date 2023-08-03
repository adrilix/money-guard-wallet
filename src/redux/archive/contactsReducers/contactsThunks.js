import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContactsRequest, deleteContactsRequest, getContactsRequest } from "services/api/contactsApi";


export const fetchContactsThunk = createAsyncThunk("contacts/fetchContactsThunk",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await getContactsRequest();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const addContactThunk = createAsyncThunk("contacts/addContactThunk",
    async (formData, { rejectWithValue }) => {
        try {
            const newContact = await addContactsRequest(formData);
            return newContact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const deleteContactThunk = createAsyncThunk("contacts/deleteContactThunk",
    async (contactId, { rejectWithValue }) => {
        try {
            const delContact = await deleteContactsRequest(contactId);
            return delContact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

