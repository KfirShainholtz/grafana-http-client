import GrafanaHTTPApi from '../client/grafana-http-api';
import IUserModel from './models/user/userModel';
import IChangePasswordModel from './models/password/changePasswordModel';

/**
 * The users http api works with a supplied auth key, for each initiation.
 * Visit http://docs.grafana.org/http_api/user/ for documentation about each request.
 */
export default class Users extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    searchUsers(perPage: number = 1000, page: number = 1): Promise<any> {
        // todo: requires basic authentication
        return this.httpClient.get(`/api/admin/stats`);
    }

    searchUsersWithPaging(perpage: number = 10, page: number = 1, query?: string) : Promise<any> {
        return this.httpClient.get(`/api/users/search?perpage=${perpage}&page=${page}&query=${query}`);
    }

    getSingleUserById(id: number) : Promise<any> {
        return this.httpClient.get(`/api/users/:${id}`);
    }

    getSingleUserByUsernameOrEmail(usernameOrEmail: string) : Promise<any> {
        return this.httpClient.get(`/api/users/lookup?loginOrEmail=${usernameOrEmail}`);
    }

    updateUser(id: number, user: Partial<IUserModel>) {
        return this.httpClient.put(`/api/users/:${id}`, user);
    }

    getOrganisationsForUser(id: number) {
        return this.httpClient.get(`/api/users/:${id}/orgs`);
    }

    /**
     * Get a user based on a given authorization key (or using the preconfigured one).
     * @param authorizationKey An optional key to use for retrieving other users
     * besides the current (if any key supplied when initiating the class)
     */
    getActualUser(authorizationKey?: string) {
        const key = authorizationKey || this.authorizationKey;
        if (!key) throw new Error(`An authorization key must exist`);

        // TODO: maybe remove it, and use the saved authorization key supplied first when initiating the class itself.
        return this.httpClient.get(`/api/user`, {
            headers: {
                Authorization: key,
            },
        });
    }

    changePassword(changePasswordObj: IChangePasswordModel) {
        return this.httpClient.put(`/api/user/password`, changePasswordObj);
    }

    switchUserContext(userId: number, organisationId: number) {
        // TODO: requires basic authentication
        return this.httpClient.post(`/api/users/${userId}/using/${organisationId}`);
    }

    getUserOrganisations() {
        return this.httpClient.get(`/api/user/orgs`);
    }

    starDashboard(dashboardId: number) {
        return this.httpClient.post(`/api/user/stars/dashboard/${dashboardId}`);
    }

    unstarDashboard(dashboardId: number) {
        return this.httpClient.delete(`/api/user/stars/dashboard/${dashboardId}`);
    }
}
