import Theme from '../preferences/preferencesModel';

export default interface IUserModel {
    email: string;
    name: string;
    login: string;
    theme: Theme;
}
