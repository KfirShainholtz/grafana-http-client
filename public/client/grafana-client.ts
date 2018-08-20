import Admin from '../../public/api/admin';
import Alerting from '../../public/api/alerting';
import Users from '../../public/api/users';
import Annotations from '../../public/api/annotations';
import Authentication from '../../public/api/authentication';
import DashboardPermissions from '../../public/api/dashboard-permissions';
import DashboardVersions from '../../public/api/dashboard-versions';
import Dashboard from '../../public/api/dashboard';
import FolderPermissions from '../../public/api/folder-permissions';
import Misc from '../../public/api/other';
import Organisation from '../../public/api/organisation';
import Preferences from '../../public/api/preferences';
import Snapshot from '../../public/api/snapshot';
import Teams from '../../public/api/teams';
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
    public folderPermissions: FolderPermissions;
    public misc: Misc;
    public organisation: Organisation;
    public preferences: Preferences;
    public snapshot: Snapshot;
    public teams: Teams;

    // TODO: remove with dependency injection util
    constructor(baseURL: string, authKey: string) {
        super(baseURL, authKey);
        this.admin = new Admin(baseURL, authKey);
        this.alerting = new Alerting(baseURL, authKey);
        this.users = new Users(baseURL, authKey);
        this.annotations = new Annotations(baseURL, authKey);
        this.authentication = new Authentication(baseURL, authKey);
        this.dashboardPermissions = new DashboardPermissions(baseURL, authKey);
        this.dashboardVersions = new DashboardVersions(baseURL, authKey);
        this.dashboard = new Dashboard(baseURL, authKey);
        this.folderPermissions = new FolderPermissions(baseURL, authKey);
        this.misc = new Misc(baseURL, authKey);
        this.organisation = new Organisation(baseURL, authKey);
        this.preferences = new Preferences(baseURL, authKey);
        this.snapshot = new Snapshot(baseURL, authKey);
        this.teams = new Teams(baseURL, authKey);
    }
}
