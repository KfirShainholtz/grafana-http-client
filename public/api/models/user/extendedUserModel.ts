import IUserModel from './userModel';

export interface IExtendedUserModel extends IUserModel {
    orgId: number;
    isGrafanaAdmin: boolean;
}
