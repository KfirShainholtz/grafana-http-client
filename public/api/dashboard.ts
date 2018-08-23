import GrafanaHTTPApi from '../client/grafana-http-api';
import ICreateOrUpdateDashboardModel from './models/dashboard/createOrUpdateDashboardModel';
import IFolderOrQuerySearchModel from './models/folder-query/folderQueryModel';
import UrlParsing from './utils/url-parsing';
import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
/**
 * The deprecated requests are going to be removed, so they won't be expressed here as well.
 * See more http://docs.grafana.org/http_api/dashboard/
 */
export default class Dashboard extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    /**
     * Frontend Settings API
     */
    createOrUpdateDashboard(createOrUpdateDashboard: ICreateOrUpdateDashboardModel) {
        return this.httpClient.post(`/api/dashboards/db`, createOrUpdateDashboard);
    }

    getDashboardByUid(uid: number) {
        return this.httpClient.get(`/api/dashboards/uid/${uid}`);
    }

    deleteDashboardByUid(uid: number) {
        return this.httpClient.delete(`/api/dashboards/uid/${uid}`);
    }

    getHomeDashboard() {
        return this.httpClient.get(`/api/dashboards/home`);
    }

    /**
     * Plural!
     */
    getDashboardsTags() {
        return this.httpClient.get(`/api/dashboards/tags`);
    }

    searchDashboard(query: IFolderOrQuerySearchModel) {
        return this.httpClient.get(`/api/search?${UrlParsing.parseUrlParams(query)}`);
    }
}
