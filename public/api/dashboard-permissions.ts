import GrafanaHTTPApi from '../client/grafana-http-api';
import IPermissionModel from './models/permissionsModel';

export default class DashboardPermissions extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        super(baseURL);
    }

    getDashboardPermissions(dashboardId: number) {
        return this.httpClient.get(`/api/dashboards/id/${dashboardId}/permissions`);
    }

    updateDashboardPermissions(dashboardId: number, permissions: IPermissionModel) {
        return this.httpClient.post(`/api/dashboards/id/${dashboardId}/permissions`, permissions);
    }
}
