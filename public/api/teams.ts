import GrafanaHTTPApi from '../client/grafana-http-api';
import UrlParsing from './utils/url-parsing';

import ITeamModel from './models/team/teamModel';
import TeamQueryModel from './models/team/teamQueryModel';
import ITeamMemberModel from './models/team/teamMemberModel';

export default class Teams extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
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
