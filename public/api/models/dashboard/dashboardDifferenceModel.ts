import { DiffType } from './dashboardTypes';

export default interface IDashboardDifferenceModel {
    base: IDifferenceComparableDashboardModel;
    new: IDifferenceComparableDashboardModel;
    diffType: DiffType;
}

interface IDifferenceComparableDashboardModel {
    dashboardId: number;
    version: number;
}
