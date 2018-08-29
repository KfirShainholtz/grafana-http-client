import GrafanaHTTPApi from '../client/grafana-http-api';
import IAlertQueryModel from './models/alert/alertQueryModel';
import IAlertNotificationModel from './models/alert/alertNotificationModel';
import UrlParsing from './utils/url-parsing';
import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';

export default class Alerting extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getAlerts(alertsQuery: Partial<IAlertQueryModel>) {
        return this.bearerHttpClient.get(`/api/alerts${UrlParsing.parseUrlParams(alertsQuery)}`);
    }

    getAlert(id: number) {
        return this.bearerHttpClient.get(`/api/alerts/${id}`);
    }

    pauseAlert(id: number) {
        return this.bearerHttpClient.post(`/api/alerts/${id}/pause`);
    }

    pauseAllAlerts() {
        // Admin api!
        return this.bearerHttpClient.post(`/api/admin/pause-all-alerts`);
    }

    getAlertNotifications() {
        return this.bearerHttpClient.get(`/api/alert-notifications`);
    }

    createAlertNotification(alertNotification: IAlertNotificationModel) {
        return this.bearerHttpClient.post(`/api/alert-notifications`, alertNotification);
    }

    updateAlertNotification(id: number, alertNotification: IAlertNotificationModel) {
        return this.bearerHttpClient.put(`/api/alert-notifications/${id}`, alertNotification);
    }

    deleteAlertNotification(id: number) {
        return this.bearerHttpClient.delete(`/api/alert-notifications/${id}`);
    }
}
