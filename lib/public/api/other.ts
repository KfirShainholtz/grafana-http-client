import GrafanaHTTPApi from '../client/grafana-http-api';

export default class Other extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    /**
     * Frontend Settings API
     */
    getSettings() {
        return this.httpClient.get(`/api/frontend/settings`);
    }

    /**
     * Login API
     */
    renewSessionBasedOnRememberCookie() {
        return this.httpClient.get(`/api/login/ping`);
    }
}
