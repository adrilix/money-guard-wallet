import { $instance } from "./apiBaseUrl";

export const getContactsRequest = async () => {
        const {data} = await $instance.get('/contacts');
        return data;
};

export const addContactsRequest = async (formData) => {
    const {data} = await $instance.post('/contacts', formData);
    return data;
};

export const deleteContactsRequest = async (contactId) => {
    const {data} = await $instance.delete(`/contacts/${contactId}`);
    return data;
};