import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IPermissionModel from './models/permissions/permissionsModel';
/**
 * The deprecated requests are going to be removed, so they won't be expressed here as well.
 * See more http://docs.grafana.org/http_api/dashboard/
 */
export default class FolderPermissions extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL);
    }

    getFolderPermissions(uid: number) {
        return this.httpClient.get(`/api/folders/${uid}/permissions`);
    }

    updateFolderPermissions(uid: string, permissions: IPermissionModel) {
        return this.httpClient.post(`/api/folders/${uid}`, permissions);
    }
}
