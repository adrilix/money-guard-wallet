import { $instance } from './baseURL';

export const getUsersCurrentDataRequest = async () => {
    const {data} = await $instance.get('/users/current');
    return data;
};