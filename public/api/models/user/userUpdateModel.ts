import { ClientRole } from '../permissions/permissionsModelTypes';

export default interface IUserUpdateModel {
    orgId: number;
    name: string;
    role: ClientRole;
}
