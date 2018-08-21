import { ClientRole } from '../permissions/permissionsModelTypes';

export default interface IAuthenticationModel {
    name: string;
    role: ClientRole; // todo: export enum to anywhere else
}
