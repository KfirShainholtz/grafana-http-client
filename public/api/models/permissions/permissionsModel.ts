import { ClientRole, PermissionRole } from './permissionsModelTypes';

export interface IFolderPermissionModel {
    role: ClientRole;
    permission: PermissionRole;
}

export default interface IFolderPermissionsModel {
    items: IFolderPermissionModel[];
}
