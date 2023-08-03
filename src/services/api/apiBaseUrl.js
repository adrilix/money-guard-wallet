import axios from "axios";

export const $instance = axios.create({
    baseURL: `https://connections-api.herokuapp.com`
})