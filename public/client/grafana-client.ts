import Admin from '../../public/api/admin';
import Alerting from '../../public/api/alerting';
import Annotations from '../../public/api/annotations';
import Authentication from '../../public/api/authentication';
import Dashboard from '../../public/api/dashboard';
import DashboardPermissions from '../../public/api/dashboard-permissions';
import DashboardVersions from '../../public/api/dashboard-versions';
import Datasource from '../../public/api/datasource';
import FolderPermissions from '../../public/api/folder-permissions';
import Organisation from '../../public/api/organisation';
import Misc from '../../public/api/other';
import Preferences from '../../public/api/preferences';
import Snapshot from '../../public/api/snapshot';
import Teams from '../../public/api/teams';
import Users from '../../public/api/users';
import IApiBearerAuth from './authentication/api-bearer-auth';
import IBasicAuth from './authentication/basic-auth';
import GrafanaHTTPApi from './grafana-http-api';

export default class GrafanaClient extends GrafanaHTTPApi{
    public admin: Admin;
    public alerting: Alerting;
    public users: Users;
    public annotations: Annotations;
    public authentication: Authentication;
    public dashboardPermissions: DashboardPermissions;
    public dashboardVersions: DashboardVersions;
    public dashboard: Dashboard;
    public datasource: Datasource;
    public folderPermissions: FolderPermissions;
    public misc: Misc;
    public organisation: Organisation;
    public preferences: Preferences;
    public snapshot: Snapshot;
    public teams: Teams;

    // TODO: remove with dependency injection util
    constructor(baseURL: string, authKey?: IApiBearerAuth, basicAuth?: IBasicAuth) {
        super(baseURL, authKey, basicAuth);
        this.admin = new Admin(baseURL, authKey, basicAuth);
        this.alerting = new Alerting(baseURL, authKey, basicAuth);
        this.users = new Users(baseURL, authKey, basicAuth);
        this.annotations = new Annotations(baseURL, authKey, basicAuth);
        this.authentication = new Authentication(baseURL, authKey, basicAuth);
        this.dashboardPermissions = new DashboardPermissions(baseURL, authKey, basicAuth);
        this.dashboardVersions = new DashboardVersions(baseURL, authKey, basicAuth);
        this.dashboard = new Dashboard(baseURL, authKey, basicAuth);
        this.datasource = new Datasource(baseURL, authKey, basicAuth);
        this.folderPermissions = new FolderPermissions(baseURL, authKey, basicAuth);
        this.misc = new Misc(baseURL, authKey, basicAuth);
        this.organisation = new Organisation(baseURL, authKey, basicAuth);
        this.preferences = new Preferences(baseURL, authKey, basicAuth);
        this.snapshot = new Snapshot(baseURL, authKey, basicAuth);
        this.teams = new Teams(baseURL, authKey, basicAuth);
    }
}
