import GrafanaHTTPApi from '../client/grafana-http-api';

import IDashboardVersionsModel from './models/dashboard/dashboardVersionsModel';
import IDashboardDifferenceModel from './models/dashboard/dashboardDifferenceModel';

import UrlParsing from './utils/url-parsing';
import IDashboardRestoreModel from './models/dashboard/dashboardRestoreModel';

export default class DashboardVersions extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
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