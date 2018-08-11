export default interface ITimepickerModel {
    collapse: boolean;
    enable: boolean;
    notice?: boolean;
    now?: boolean;
    refresh_intervals: RefreshInterval[];
    status: string;
    time_options: TimeOption[];
    type: string;
}

export enum RefreshInterval {
    FiveSeconds = '5s',
    TenSeconds = '10s',
    ThirtySeconds = '30s',
    OneMinute = '1m',
    FiveMinutes = '5m',
    FifteenMinutes = '15m',
    ThirtyMinutes = '30m',
    OneHour = '1h',
    TwoHours = '2h',
    OneDay = '1d',
}

export enum TimeOption {
    FiveMinutes = '5m',
    FifteenMinutes = '15m',
    OneHour = '1h',
    ThreeHours = '3h',
    SixHours = '6h',
    TwelveHours = '12h',
    OneDay = '24h',
    TwoDays = '2d',
    ThreeDays = '3d',
    FourDays = '4d',
    SevenDays = '7d',
    ThirtyDays = '30d',
}
