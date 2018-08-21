import { FolderOrQuerySearchType } from './folderQueryModelTypes';

export default interface IFolderOrQuerySearchModel {
    query: string;
    tag: string[];
    type: FolderOrQuerySearchType;
    dashboardIds: number[];
    folderIds: number[];
    starred: boolean;
    limit: number;
}
