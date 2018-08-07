import Admin from './public/api/admin';
import Alerting from './public/api/alerting';
import Users from './public/api/users';
import annotations from './public/api/annotations';
import authentication from './public/api/authentication';
import dashboardPermissions from './public/api/dashboard-permissions';
import dashboardVersions from './public/api/dashboard-versions';
import dashboard from './public/api/dashboard';
import folderPermissions from './public/api/folder-permissions';
import misc from './public/api/misc';
import organisation from './public/api/organisation';
import preferences from './public/api/preferences';
import snapshot from './public/api/snapshot';
import teams from './public/api/teams';

import GrafanaClient from './public/client/grafana-client';

export const GrafanaAdmin = Admin;
export const GrafanaAlerting = Alerting;
export const GrafanaUsers = Users;   

export default GrafanaClient;