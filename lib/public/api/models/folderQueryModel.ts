export enum FolderOrQuerySearchType {
    DashFolder = 'dash-folder', DashDB = 'dash-db',
}

export default interface IFolderOrQuerySearchModel {
    query: string;
    tag: string[];
    type: FolderOrQuerySearchType;
    dashboardIds: number[];
    folderIds: number[];
    starred: boolean;
    limit: number;
}
