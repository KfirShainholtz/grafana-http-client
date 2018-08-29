import GrafanaHTTPApi from '../client/grafana-http-api';
import IAuthenticationModel from './models/authentication/authenticationModel';
import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';

export default class Authentication extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getApiKeys() {
        return this.bearerHttpClient.get(`/api/auth/keys`);
    }

    createApiKey(authentication: IAuthenticationModel) {
        return this.bearerHttpClient.post(`/api/auth/keys`, authentication);
    }

    deleteApiKey(id: number) {
        return this.bearerHttpClient.delete(`/api/auth/keys/${id}`);
    }
}
