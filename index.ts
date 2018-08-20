import Admin from './public/api/admin';
import Alerting from './public/api/alerting';
import Users from './public/api/users';
import Annotations from './public/api/annotations';
import Authentication from './public/api/authentication';
import DashboardPermissions from './public/api/dashboard-permissions';
import DashboardVersions from './public/api/dashboard-versions';
import Dashboard from './public/api/dashboard';
import Datasource from './public/api/datasource';
import FolderPermissions from './public/api/folder-permissions';
import Misc from './public/api/other';
import Organisation from './public/api/organisation';
import Preferences from './public/api/preferences';
import Snapshot from './public/api/snapshot';
import Teams from './public/api/teams';

import GrafanaClient from './public/client/grafana-client';
export {
    Admin,
    Alerting,
    Users,
    Annotations,
    Authentication,
    DashboardPermissions,
    DashboardVersions,
    Dashboard,
    Datasource,
    FolderPermissions,
    Misc,
    Organisation,
    Preferences,
    Snapshot,
    Teams,
};

export default GrafanaClient;
