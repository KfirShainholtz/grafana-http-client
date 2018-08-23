import { ISearchUserModel } from '../../../../user/searchUserModel';

export default interface ISearchUserWithPagingResponse {
    totalCount: number;
    users: ISearchUserModel[];
    page: number;
    perPage: number;
}
