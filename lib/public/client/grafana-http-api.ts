import axios, { AxiosInstance } from 'axios';

export default class GrafanaHTTPApi implements IGrafanaHTTPApi {
    httpClient: AxiosInstance;
    authorizationKey?: string | undefined;

    constructor(authorizationKey?: string, baseURL?: string) {
        // TODO: maybe create another http client that will use the admin@admin
        // TODO: add multiple authentication
        // TODO: maybe add the example request + response for each API
        this.httpClient = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export interface IGrafanaHTTPApi {
    httpClient: AxiosInstance,
    authorizationKey?: string,
}