import { Theme } from '../preferences/preferencesModelTypes';

export default interface IUserModel {
    email: string;
    name: string;
    login: string;
    theme: Theme;
}
