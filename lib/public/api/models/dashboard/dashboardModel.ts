import { Timezone } from '../preferencesModel';

export default interface IDashboardModel {
    id?: string; // null to create new
    uid?: string;
    title: string;
    tags: string[];
    timezone: Timezone;
    schemaVersion?: number;
    version?: number;
    message?: string;
}
