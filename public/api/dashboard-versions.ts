import GrafanaHTTPApi from '../client/grafana-http-api';

import IDashboardVersionsModel from './models/dashboard/dashboardVersionsModel';
import IDashboardDifferenceModel from './models/dashboard/dashboardDifferenceModel';

import UrlParsing from './utils/url-parsing';
import IDashboardRestoreModel from './models/dashboard/dashboardRestoreModel';
import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';

export default class DashboardVersions extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getAllDashboardVersions(dashboardId: number, start: Partial<IDashboardVersionsModel> = {}) {
        return this.httpClient.get(`/api/dashboards/id/${dashboardId}/versions${UrlParsing.parseUrlParams(start)}`);
    }

    getDashboardVersion(dashboardId: number, id: number) { // wtf?
        return this.httpClient.get(`/api/dashboards/id/${dashboardId}/versions/${id}`);
    }

    restoreDashboard(dashboardId: number, dashboardVersion: IDashboardRestoreModel) {
        return this.httpClient.post(`/api/dashboards/id/${dashboardId}/restore`);
    }

    compareDashboardVersions(dashboardDiff: IDashboardDifferenceModel) {
        return this.httpClient.post(`/api/dashboards/calculate-diff`, dashboardDiff);
    }
}
