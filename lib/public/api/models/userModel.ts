export default interface IUserModel {
    email: string,
    name: string,
    login: string,
    theme: Theme;
}

export enum Theme {
    'dark', 'light'
}