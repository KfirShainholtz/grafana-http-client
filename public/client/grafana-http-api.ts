import axios, { AxiosInstance } from 'axios';
import IApiBearerAuth from './authentication/api-bearer-auth';
import IBasicAuth from './authentication/basic-auth';

export default class GrafanaHTTPApi {
    protected httpClient: AxiosInstance;
    private basicAuth: IBasicAuth;
    private bearerAuth: IApiBearerAuth;

    constructor(baseURL?: string, bearerAuth? :IApiBearerAuth, basicAuth?: IBasicAuth) {
        // todo: remove any, make default constructors
        // TODO: maybe create another http client that will use the admin@admin
        // TODO: maybe add the example request + response for each API
        // TODO: maybe initialize lazy - on request, instead of in constructor? probably no one would use it first
        // TODO: basic auth and authorization bearer colide.
        // change to accept only a signle one/ toggle them each time we need a new approach.
        this.basicAuth = basicAuth!;
        this.bearerAuth = bearerAuth!;

        this.httpClient = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                ...(bearerAuth && bearerAuth.Authorization && {
                    Authorization: bearerAuth!.Authorization,
                }),
            },
            ...(basicAuth && basicAuth.username && { auth: {
                username: basicAuth!.username,
                password: basicAuth!.password,
            }}),
        });
    }

    get basicHttpClient(): AxiosInstance {
        this.httpClient.defaults.auth = {
            username: this.basicAuth!.username,
            password: this.basicAuth!.password,
        };

        return this.httpClient;
    }

    get bearerHttpClient(): AxiosInstance {
        this.httpClient.defaults.headers.Authorization = this.bearerAuth!.Authorization;
        return this.httpClient;
    }
}
