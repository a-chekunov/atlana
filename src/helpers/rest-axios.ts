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
