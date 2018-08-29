import { AxiosPromise } from 'axios';
import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IAdminChangePasswordModel from './models/admin/adminChangePasswordModel';
import IAdminPermissionsModel from './models/admin/adminPermissionsModel';
import IUserModel from './models/user/userModel';

/**
 The Admin HTTP API does not currently work with an API Token.
 API Tokens are currently only linked to an organization and an organization role.
 They cannot be given the permission of server admin, only users can be given that permission.
 So in order to use these API calls you will have to use Basic Auth
 and the Grafana user must have the Grafana Admin permission.
 Visit http://docs.grafana.org/http_api/admin/#admin-api for more
 */
export default class Admin extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getSettings() {
        return this.basicHttpClient.get(`/api/admin/settings`);
    }

    createNewUser(user: IUserModel): Promise<any> {
        return this.basicHttpClient.post(`/api/admin/users`, user);
    }

    changeGlobalUserPassword(userId: number, password: IAdminChangePasswordModel) : Promise<any> {
        // TODO: maybe use partial<IChangePasswordModel>?
        return this.basicHttpClient.put(`/api/admin/users/${userId}/password`, password);
    }

    updateGlobalUserPermissions(userId: number, permissions: IAdminPermissionsModel) {
        return this.basicHttpClient.put(`/api/admin/users/${userId}/permissions`, permissions);
    }

    deleteGlobalUser(userId: number) {
        return this.basicHttpClient.delete(`/api/admin/users/${userId}`);
    }

    pauseAllAlerts() {
        return this.basicHttpClient.post(`/api/admin/pause-all-alerts`);
    }
}
