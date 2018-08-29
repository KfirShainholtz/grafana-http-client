import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import IDatasourceModel from './models/datasource/datasourceModel';

export default class Datasource extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    getAllDatasources() {
        return this.bearerHttpClient.get(`/api/datasources`);
    }

    getDatasourceById(datasourceId: number | string) {
        return this.bearerHttpClient.get(`/api/datasources/${datasourceId}`);
    }

    getDatasourceByName(name: string) {
        return this.bearerHttpClient.get(`/api/datasources/name/${name}`);
    }

    getDatasourceIdByName(name: string) {
        return this.bearerHttpClient.get(`/api/datasources/id/${name}`);
    }

    createDatasource(datasource: IDatasourceModel | any) { // todo: figure out actual model
        return this.bearerHttpClient.post(`/api/datasources`, datasource);
    }

    updateDatasource(datasourceId: number | string, datasource: IDatasourceModel | any) {
        return this.bearerHttpClient.put(`/api/datasources/${datasourceId}`, datasource);
    }

    deleteDatasourceById(datasourceId: number | string) {
        return this.bearerHttpClient.delete(`/api/datasources/${datasourceId}`);
    }

    deleteDatasourceByName(datasourceName: string) {
        return this.bearerHttpClient.delete(`/api/datasources/name/${datasourceName}`);
    }

    datasourceProxyCalls(datasourceId: number | string) {
        return this.bearerHttpClient.get(`/api/datasources/proxy/${datasourceId}`);
    }
}
