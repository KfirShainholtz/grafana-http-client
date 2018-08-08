import IDashboardModel from './dashboardModel';

export default interface ICreateOrUpdateDashboardModel {
    dashboard: IDashboardModel;
    folderId: number; // TODO: check if numbers only
    overwrite: boolean;
}
