export interface ITeamQueryModel {
    perpage: number;
    page: number;
    query?: string;
}

export default class TeamQueryModel implements ITeamQueryModel {
    perpage: number = 1000;
    page: number = 1;
    query?: string;
}
