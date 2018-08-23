import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IPreferencesModel from './models/preferences/preferencesModel';

export default class Preferences extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getCurrentUserPreferences() {
        return this.httpClient.get(`/api/user/preferences`);
    }

    updateCurrentUserPreferences(preferences: IPreferencesModel) {
        return this.httpClient.put(`/api/user/preferences`, preferences);
    }

    getCurrentOrganisationPreferences() {
        return this.httpClient.get(`/api/org/preferences`);
    }

    updateCurrentOrganisationPreferences(preferences: IPreferencesModel) {
        return this.httpClient.put(`/api/org/preferences`, preferences);
    }
}
