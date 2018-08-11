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

export enum GraphToolTips {
    Default = 0,
    SharedCrossHair = 1,
    SharedCrossHairAndTooltip = 1,
}

export default interface IPreferencesModel {
    theme: Theme;
    homeDashboardId?: number;
    timezone?: Timezone;
}
