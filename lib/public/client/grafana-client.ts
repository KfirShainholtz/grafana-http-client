import axios, { AxiosInstance } from 'axios';

export default class GrafanaClient {
    httpClient: AxiosInstance;

    constructor(baseURL: string, authKey: string) {
        this.httpClient = axios.create({
            baseURL,
        })
    }
}