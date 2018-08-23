import axios, { AxiosInstance } from 'axios';
import IApiBearerAuth from './authentication/api-bearer-auth';
import IBasicAuth from './authentication/basic-auth';

export default class GrafanaHTTPApi {
    protected httpClient: AxiosInstance;

    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: maybe create another http client that will use the admin@admin
        // TODO: maybe add the example request + response for each API
        // TODO: maybe initialize lazy - on request, instead of in constructor? probably no one would use it first
        this.httpClient = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                ...(authKey!.Authorization && {
                    Authorization: authKey!.Authorization,
                }),
            },
            ...(basicAuth!.username && { auth: {
                username: basicAuth!.username,
                password: basicAuth!.password,
            }}),
        });
    }
}
