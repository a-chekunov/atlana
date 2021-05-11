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
