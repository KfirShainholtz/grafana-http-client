import { ISearchUser } from './searchUser';

export default interface ISearchUserWithPagingResponse {
    totalCount: number;
    users: ISearchUser[];
    page: number;
    perPage: number;
}
