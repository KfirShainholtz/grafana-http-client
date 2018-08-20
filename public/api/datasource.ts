import GrafanaHTTPApi from '../client/grafana-http-api';

import IDatasourceModel from './models/datasource/datasourceModel';
import IDashboardDifferenceModel from './models/dashboard/dashboardDifferenceModel';

import UrlParsing from './utils/url-parsing';
import IDashboardRestoreModel from './models/dashboard/dashboardRestoreModel';

export default class Datasource extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    getAllDatasources() {
        return this.httpClient.get(`/api/datasources`);
    }

    getDatasourceById(datasourceId: number | string) {
        return this.httpClient.get(`/api/datasources/${datasourceId}`);
    }

    getDatasourceByName(name: string) {
        return this.httpClient.get(`/api/datasources/name/${name}`);
    }

    getDatasourceIdByName(name: string) {
        return this.httpClient.get(`/api/datasources/id/${name}`);
    }

    createDatasource(datasource: IDatasourceModel | any) { // todo: figure out actual model
        return this.httpClient.post(`/api/datasources`, datasource);
    }

    updateDatasource(datasourceId: number | string, datasource: IDatasourceModel | any) {
        return this.httpClient.put(`/api/datasources/${datasourceId}`, datasource);
    }

    deleteDatasourceById(datasourceId: number | string) {
        return this.httpClient.delete(`/api/datasources/${datasourceId}`);
    }

    deleteDatasourceByName(datasourceName: string) {
        return this.httpClient.delete(`/api/datasources/name/${datasourceName}`);
    }

    datasourceProxyCalls(datasourceId: number | string) {
        return this.httpClient.get(`/api/datasources/proxy/${datasourceId}`);
    }
}
