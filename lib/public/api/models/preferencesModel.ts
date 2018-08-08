export enum Theme {
    Dark = 'dark',
    Light = 'light',
    Default = '',
}

export enum Timezone {
    UTC = 'utc',
    Browser = 'browser',
    Default = '',
}

export default interface IPreferencesModel {
    theme: Theme;
    homeDashboardId?: number;
    timezone?: Timezone;
}
