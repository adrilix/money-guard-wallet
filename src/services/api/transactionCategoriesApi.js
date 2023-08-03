import { $instance } from './baseURL';

export const getTransactionCategoriesRequest = async () => {
    const {data} = await $instance.get('/transaction-categories');
    return data;
};
