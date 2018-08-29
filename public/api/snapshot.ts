import IApiBearerAuth from '../client/authentication/api-bearer-auth';
import IBasicAuth from '../client/authentication/basic-auth';
import GrafanaHTTPApi from '../client/grafana-http-api';
import ISnapshotModel from './models/snapshot/snapshotModel';
import ISnapshotQueryModel from './models/snapshot/snapshotQueryModel';
import UrlParsing from './utils/url-parsing';

export default class Snapshot extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        // TODO: add basic authentication
        super(baseURL, authKey, basicAuth);
    }

    createNewSnapshot(snapshot: ISnapshotModel) {
        return this.bearerHttpClient.post(`/api/snapshots`, snapshot);
    }

    getSnapshots(snapshotQuery: ISnapshotQueryModel) {
        return this.bearerHttpClient.get(`/api/snapshots${UrlParsing.parseUrlParams(snapshotQuery)}`);
    }

    getSnapshotByKey(key: number | string) {
        return this.bearerHttpClient.get(`/api/snapshot/${key}`);
    }

    deleteSnapshotByDeleteKey(deleteKey: number | string) {
        return this.bearerHttpClient.delete(`/api/snapshot-delete/${deleteKey}`);
    }
}
