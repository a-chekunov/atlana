import {AxiosRequestConfig} from 'axios';
import {restAxios} from "./rest-axios";

export interface RequestParametersI {
    url: string;
    config?: AxiosRequestConfig;
    data?: any;
    params?: {};
}

export class RestService {
    public static async get<T>({url, config, params}: RequestParametersI): Promise<T> {
        const headers = config && config.headers ? config.headers : {};
        const res = await restAxios.get<T>(`${url}`, {
            ...config,
            params,
            ...headers,
        });
        return res.data;
    }
}
