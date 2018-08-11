import IDashboardModel from '../dashboard/dashboardModel';

export default interface ISnapshotModel {
    dashboard: IDashboardModel;
    name?: string;
    expires?: number | string;
    external?: boolean;
    key?: string;
    deleteKey: boolean | string | any; // todo: wtf is this
}
