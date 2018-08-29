import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IChangePasswordModel from './models/password/changePasswordModel';
import IUserModel from './models/user/userModel';

/**
 * The users http api works with a supplied auth key, for each initiation.
 * Visit http://docs.grafana.org/http_api/user/ for documentation about each request.
 */
export default class Users extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    searchUsers(perPage: number = 1000, page: number = 1): Promise<any> {
        // todo: requires basic authentication
        return this.basicHttpClient.get(`/api/admin/stats`);
    }

    searchUsersWithPaging(perpage: number = 10, page: number = 1, query?: string) : Promise<any> {
        return this.basicHttpClient.get(`/api/users/search?perpage=${perpage}&page=${page}&query=${query}`);
    }

    getSingleUserById(id: number) : Promise<any> {
        return this.basicHttpClient.get(`/api/users/:${id}`);
    }

    getSingleUserByUsernameOrEmail(usernameOrEmail: string) : Promise<any> {
        return this.basicHttpClient.get(`/api/users/lookup?loginOrEmail=${usernameOrEmail}`);
    }

    updateUser(id: number, user: Partial<IUserModel>) {
        return this.basicHttpClient.put(`/api/users/:${id}`, user);
    }

    getOrganisationsForUser(id: number) {
        return this.basicHttpClient.get(`/api/users/:${id}/orgs`);
    }

    /**
     * Get a user based on a given authorization key (or using the preconfigured one).
     * @param authorizationKey An optional key to use for retrieving other users
     * besides the current (if any key supplied when initiating the class)
     */
    getActualUser() {
        // TODO: maybe remove it, and use the saved authorization key supplied first when initiating the class itself.
        return this.basicHttpClient.get(`/api/user`);
    }

    changePassword(changePasswordObj: IChangePasswordModel) {
        return this.basicHttpClient.put(`/api/user/password`, changePasswordObj);
    }

    switchSignedInUserContext(organisationId: number) {
        return this.basicHttpClient.post(`/api/user/using/${organisationId}`);
    }

    switchUserContext(userId: number, organisationId: number) {
        // TODO: requires basic authentication
        return this.basicHttpClient.post(`/api/users/${userId}/using/${organisationId}`);
    }

    getUserOrganisations() {
        return this.basicHttpClient.get(`/api/user/orgs`);
    }

    starDashboard(dashboardId: number) {
        return this.basicHttpClient.post(`/api/user/stars/dashboard/${dashboardId}`);
    }

    unstarDashboard(dashboardId: number) {
        return this.basicHttpClient.delete(`/api/user/stars/dashboard/${dashboardId}`);
    }
}
