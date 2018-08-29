import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IOrganisationModel from './models/organisation/organisationModel';
import IUserModel from './models/user/userModel';

export default class Organisation extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL);
    }

    getCurrentOrganisation(): Promise<any> {
        return this.bearerHttpClient.get(`/api/org/`);
    }

    getAllUsersWithingOrganisation() : Promise<any> {
        return this.bearerHttpClient.get(`/api/org/users`);
    }

    updateUser(userId: number) : Promise<any> {
        return this.bearerHttpClient.patch(`/api/org/users/${userId}`);
    }

    deleteUserFromCurrentOrganisation(userId: number) : Promise<any> {
        return this.bearerHttpClient.delete(`/api/org/users/${userId}`);
    }

    updateCurrentOrganisation(organisation: Partial<IOrganisationModel>) { // partial?
        return this.bearerHttpClient.put(`/api/org/`, organisation);
    }

    addNewUserToCurrentOrganisation(user: Partial<IUserModel>) {
        return this.bearerHttpClient.post(`/api/org/users`, user);
    }

    /**
     * Admin only! basic authentication - TODO: maybe add api section for administrative actions
     */
    getOrganisationById(orgId: number) {
        // TODO: maybe remove it, and use the saved authorization key supplied first when initiating the class itself.
        return this.basicHttpClient.get(`/api/orgs/${orgId}`); // todo - add authorization in headers
    }

    /**
     * Admin only! basic authentication - TODO: maybe add api section for administrative actions
     */
    getOrganisationByName(orgName: string) {
        return this.basicHttpClient.get(`/api/orgs/name/${orgName}`); // todo - add authorization in headers
    }

    /**
     * Admin only! basic authentication - TODO: maybe add api section for administrative actions
     * NOTE: The api will work in the following two ways
     * 1) Need to set GF_USERS_ALLOW_ORG_CREATE=true
     * 2) Set the config users.allow_org_create to true in ini file
     */
    createOrganisation(org: IOrganisationModel) : Promise<any> {
        return this.basicHttpClient.post(`/api/orgs`, org);
    }

    /**
     * Admin only
     */
    searchAllOrganisations() {
    // Note: The api will only work when you pass the admin name and password
    // to the request http url, like http://admin:admin@localhost:3000/api/orgs // TODO: WTF?
        return this.basicHttpClient.get(`/api/orgs`);
    }

    updateOrganisation(orgId: number, org: IOrganisationModel) {
        return this.basicHttpClient.put(`/api/orgs/${orgId}`, org);
    }

    deleteOrganisation(orgId: number) {
        return this.basicHttpClient.delete(`/api/orgs/${orgId}`);
    }

    /**
     * Admin only!
     * Note: The api will only work when you pass the admin name and password to the request http url,
     * like http://admin:admin@localhost:3000/api/orgs/1/users
     */
    getUsersInOrganisation(orgId: number) {
        return this.basicHttpClient.get(`/api/orgs/${orgId}/users`);
    }

    addUserInOrganisation(orgId: number, user: IUserModel): Promise<any> {
        return this.basicHttpClient.post(`/api/orgs/${orgId}/users`, user);
    }

    updateUsersInOrganisation(orgId: number, userId: number, user: IUserModel): Promise<any> {
        return this.basicHttpClient.post(`/api/orgs/${orgId}/users/${userId}`, user);
    }

    deleteUserInOrganisation(orgId: number, userId: number) {
        return this.basicHttpClient.delete(`/api/orgs/${orgId}/users/${userId}`);
    }
}
