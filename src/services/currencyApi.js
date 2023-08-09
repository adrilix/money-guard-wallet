import axios from "axios";

const $instance = axios.create({
    baseURL: `https://api.monobank.ua`
})

export const getCurrencyRequest = async () => {
    const {data} = await $instance.get('/bank/currency');
    return data;
};