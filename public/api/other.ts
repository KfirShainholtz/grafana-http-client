import GrafanaHTTPApi from '../client/grafana-http-api';
import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';

export default class OrganisationOther extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL);
    }

    /**
     * Frontend Settings API
     */
    getSettings() {
        return this.bearerHttpClient.get(`/api/frontend/settings`);
    }

    /**
     * Login API
     */
    renewSessionBasedOnRememberCookie() {
        return this.bearerHttpClient.get(`/api/login/ping`);
    }
}
