export enum PermissionRole {
    View = 1, Edit = 2, Admin = 4,
}

export enum ClientRole {
    Viewer = 'Viewer', Editor = 'Editor', Admin = 'Admin',
}

interface IFolderPermission {
    role: ClientRole;
    permission: PermissionRole;
}

export default interface IFolderPermissionsModel {
    items: IFolderPermission[];
}
