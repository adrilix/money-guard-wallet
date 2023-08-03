import { $instance } from "./apiBaseUrl";

export const setToken = (token) => {
    $instance.defaults.headers.Authorization = `Bearer ${token}`;
}

const clearToken = (token) => {
    $instance.defaults.headers.Authorization = '';
}

export const registerRequest = async (formData) => {
        const {data} = await $instance.post('/users/signup', formData);
        setToken(data.token);
        return data; 
};

export const logInRequest = async (formData) => {
        const {data} = await $instance.post('/users/login', formData);
        setToken(data.token);
        return data;
};

export const logOutRequest = async () => {
    const {data} = await $instance.post('/users/logout');
    clearToken();
    return data;
};

export const getUserCurrentDataRequest = async () => {
        const {data} = await $instance.get('/users/current');
        return data;
};