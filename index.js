const _ = require('lodash');
const axios = require('axios');

const admin = require('./public/api/admin');
const alerting = require('./public/api/alerting');
const annotations = require('./public/api/annotations');
const authentication = require('./public/api/authentication');
const dashboardPermissions = require('./public/api/dashboard-permissions');
const dashboardVersions = require('./public/api/dashboard-versions');
const dashboard = require('./public/api/dashboard');
const folderPermissions = require('./public/api/folder-permissions');
const misc = require('./public/api/misc');
const organisation = require('./public/api/organisation');
const preferences = require('./public/api/preferences');
const snapshot = require('./public/api/snapshot');
const teams = require('./public/api/teams');
const users = require('./public/api/users');

const GrafanaClient = function () {
}

Object.assign(GrafanaClient.prototype, {
    admin,
    alerting,
    annotations,
    authentication,
    dashboard,
    dashboardPermissions,
    dashboardVersions,
    folderPermissions,
    misc,
    organisation,
    preferences,
    snapshot,
    teams,
    users
})

module.exports = GrafanaClient;