import GrafanaHTTPApi from '../client/grafana-http-api';
import IAlertQueryModel from './models/alert/alertQueryModel';
import IAlertNotificationModel from './models/alert/alertNotificationModel';
import UrlParsing from './utils/url-parsing';

export default class Alerting extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getAlerts(alertsQuery: IAlertQueryModel) {
        return this.httpClient.get(`/api/alerts${UrlParsing.parseUrlParams(alertsQuery)}`);
    }

    getAlert(id: number) {
        return this.httpClient.get(`/api/alerts/${id}`);
    }

    pauseAlert(id: number) {
        return this.httpClient.post(`/api/alerts/${id}/pause`);
    }

    pauseAllAlerts() {
        // Admin api!
        return this.httpClient.post(`/api/admin/pause-all-alerts`);
    }

    getAlertNotifications() {
        return this.httpClient.get(`/api/alert-notifications`);
    }

    createAlertNotification(alertNotification: IAlertNotificationModel) {
        return this.httpClient.post(`/api/alert-notifications`, alertNotification);
    }

    updateAlertNotification(id: number, alertNotification: IAlertNotificationModel) {
        return this.httpClient.put(`/api/alert-notifications/${id}`, alertNotification);
    }

    deleteAlertNotification(id: number) {
        return this.httpClient.delete(`/api/alert-notifications/${id}`);
    }
}
