import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IPermissionModel from './models/permissions/permissionsModel';

export default class DashboardPermissions extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        super(baseURL, authKey, basicAuth);
    }

    getDashboardPermissions(dashboardId: number) {
        return this.bearerHttpClient.get(`/api/dashboards/id/${dashboardId}/permissions`);
    }

    updateDashboardPermissions(dashboardId: number, permissions: IPermissionModel) {
        return this.bearerHttpClient.post(`/api/dashboards/id/${dashboardId}/permissions`, permissions);
    }
}
