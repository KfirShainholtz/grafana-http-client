import ClientRole from '../permissions/permissionsModel';

export default interface IAuthenticationModel {
    name: string;
    role: ClientRole; // todo: export enum to anywhere else
}
