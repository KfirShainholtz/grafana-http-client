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
        return this.bearerHttpClient.get(`/api/user/preferences`);
    }

    updateCurrentUserPreferences(preferences: IPreferencesModel) {
        return this.bearerHttpClient.put(`/api/user/preferences`, preferences);
    }

    getCurrentOrganisationPreferences() {
        return this.bearerHttpClient.get(`/api/org/preferences`);
    }

    updateCurrentOrganisationPreferences(preferences: IPreferencesModel) {
        return this.bearerHttpClient.put(`/api/org/preferences`, preferences);
    }
}
