import Admin from './lib/public/api/admin';
import Alerting from './lib/public/api/alerting';
import Users from './lib/public/api/users';
import annotations from './lib/public/api/annotations';
import authentication from './lib/public/api/authentication';
import dashboardPermissions from './lib/public/api/dashboard-permissions';
import dashboardVersions from './lib/public/api/dashboard-versions';
import dashboard from './lib/public/api/dashboard';
import folderPermissions from './lib/public/api/folder-permissions';
import misc from './lib/public/api/other';
import organisation from './lib/public/api/organisation';
import preferences from './lib/public/api/preferences';
import snapshot from './lib/public/api/snapshot';
import teams from './lib/public/api/teams';

import GrafanaClient from './lib/public/client/grafana-client';

export const grafanaAdmin = Admin;
export const grafanaAlerting = Alerting;
export const grafanaUsers = Users;

export default GrafanaClient;
