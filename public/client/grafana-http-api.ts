import axios, { AxiosInstance } from 'axios';

export default class GrafanaHTTPApi /***implements IGrafanaHTTPApi***/ {
    protected httpClient: AxiosInstance;
    protected authorizationKey?: string | undefined;

    constructor(baseURL?: string, authKey?: string) {
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
