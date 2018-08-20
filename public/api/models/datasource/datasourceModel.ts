export default interface IDatasourceModel {
    id: number;
    orgId: number;
    name: string;
    access: string; // todo: check types out
    url: string;
    password?: string;
    user?: string;
    database: string;
    basicAuth: boolean;
    basicAuthUser: string;
    basicAuthPassword: string;
    isDefault: boolean;
    jsonData: {};
}
