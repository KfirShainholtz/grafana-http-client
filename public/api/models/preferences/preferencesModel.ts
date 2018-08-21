import { Theme, Timezone } from './preferencesModelTypes';

export default interface IPreferencesModel {
    theme: Theme;
    homeDashboardId?: number;
    timezone?: Timezone;
}
