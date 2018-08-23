import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import ITeamMemberModel from './models/team/teamMemberModel';
import ITeamModel from './models/team/teamModel';
import TeamQueryModel from './models/team/teamQueryModel';
import UrlParsing from './utils/url-parsing';

export default class Teams extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    searchTeamWithPaging(teamQuery: TeamQueryModel) {
        return this.httpClient.get(`/api/teams/search${UrlParsing.parseUrlParams(teamQuery)}`);
    }

    getTeamById(id: number) {
        return this.httpClient.get(`/api/teams/${id}`);
    }

    addTeam(team: ITeamModel) {
        return this.httpClient.post(`/api/teams`, team);
    }

    updateTeam(id: number, team: ITeamModel) {
        return this.httpClient.put(`/api/teams/${id}`, team);
    }

    deleteTeamById(id: number) {
        return this.httpClient.delete(`/api/teams/${id}`);
    }

    getTeamMembers(teamId: number) {
        return this.httpClient.get(`/api/teams/${teamId}/members`);
    }

    addTeamMember(teamId: number, teamMember: ITeamMemberModel) {
        return this.httpClient.post(`/api/teams/${teamId}/members`, teamMember);
    }

    removeMemberFromTeam(teamId: number, userId: number) {
        return this.httpClient.delete(`/api/teams/${teamId}/members/${userId}`);
    }
}
