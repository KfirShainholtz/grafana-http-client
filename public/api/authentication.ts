import GrafanaHTTPApi from '../client/grafana-http-api';
import IAuthenticationModel from './models/authentication/authenticationModel';

export default class Authentication extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    getApiKeys() {
        return this.httpClient.get(`/api/auth/keys`);
    }

    createApiKey(authentication: IAuthenticationModel) {
        return this.httpClient.post(`/api/auth/keys`, authentication);
    }

    deleteApiKey(id: number) {
        return this.httpClient.delete(`/api/auth/keys/${id}`);
    }
}
