import GrafanaHTTPApi from '../client/grafana-http-api';
import IDashboardModel from './models/dashboardModel';
/**
 * See more http://docs.grafana.org/http_api/dashboard/
 */
export default class Dashboard extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    /**
     * Frontend Settings API
     */
    createOrUpdateDashboard(dashboard: IDashboardModel) {
        return this.httpClient.get(`/api/frontend/settings`);
    }

    /**
     * Login API
     */
    renewSessionBasedOnRememberCookie() {
        return this.httpClient.get(`/api/login/ping`);
    }
}
