import GrafanaHTTPApi from '../client/grafana-http-api';

/**
 * The Admin API doesn't currently work with an API Token.
 * visit http://docs.grafana.org/http_api/admin/#admin-api for more regarding the matter.
 */
export default class Admin extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    getGrafanaStats(): Promise<any> {
        return this.httpClient.get('/api/admin/stats');
    }
}