import GrafanaHTTPApi from '../client/grafana-http-api';
import IOrganisationModel from './models/organisationModel';
import IUserModel from './models/userModel';
import IPreferencesModel from './models/preferencesModel';

export default class Preferences extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
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
