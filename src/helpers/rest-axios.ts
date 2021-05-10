import axios from 'axios';
import { environment } from 'env/env';

export const restAxios = axios.create({
    baseURL: environment,
});

restAxios.interceptors.request.use(
    config => {
        const token = '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';
        config.headers.Authorization = `token ${token}`;
        return config
    },
    error => Promise.reject(error)
);

restAxios.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);
