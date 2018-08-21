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

import IAdminChangePasswordModel from './public/api/models/admin/adminChangePasswordModel';
import IAdminPermissionsModel from './public/api/models/admin/adminPermissionsModel';
import IAnnotationsModel from './public/api/models/annotations/annotationModel';
import IAnnotationsQueryModel from './public/api/models/annotations/annotationsQueryModel';
import IAuthenticationModel from './public/api/models/authentication/authenticationModel';
import IGraphiteAnnotationsModel from './public/api/models/annotations/graphiteAnnotationModel';
import ICreateOrUpdateDashboardModel from './public/api/models/dashboard/createOrUpdateDashboardModel';
import IDashboardDifferencesModel from './public/api/models/dashboard/dashboardDifferenceModel';
import IDashboardMetaModel from './public/api/models/dashboard/dashboardMetaModel';
import IDashboardModel from './public/api/models/dashboard/dashboardModel';
import { TemplatingType, DiffType } from './public/api/models/dashboard/dashboardModelTypes';
import IDashboardRestoreModel from './public/api/models/dashboard/dashboardRestoreModel';
import IFolderPermissionsModel, { IFolderPermissionModel } from './public/api/models/permissions/permissionsModel';
import { PermissionRole, ClientRole } from './public/api/models/permissions/permissionsModelTypes';
import IPanelModel from './public/api/models/dashboard/panelModel';
import ITemplatingModel from './public/api/models/dashboard/templatingModel';
import ITimePickerModel from './public/api/models/dashboard/timepickerModel';
import IDatasourceModel from './public/api/models/datasource/datasourceModel';
import ISnapshotModel from './public/api/models/snapshot/snapshotModel';
import ISnapshotQueryModel from './public/api/models/snapshot/snapshotQueryModel';
import ITeamMemberModel from './public/api/models/team/teamMemberModel';
import ITeamModel from './public/api/models/team/teamModel';
import ITeamQueryModel from './public/api/models/team/teamQueryModel';
import IAlertNotificationModel from './public/api/models/alert/alertNotificationModel';
import IAlertQueryModel from './public/api/models/alert/alertQueryModel';
import IUserModel from './public/api/models/user/userModel';
import IPreferencesModel from './public/api/models/preferences/preferencesModel';
import { Theme, GraphToolTips, Timezone } from './public/api/models/preferences/preferencesModelTypes';
import IChangePasswordModel from './public/api/models/password/changePasswordModel';

import GrafanaClient from './public/client/grafana-client';

// API
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

// Models
export {
    Theme, GraphToolTips, Timezone, PermissionRole, ClientRole, TemplatingType, DiffType,
    IAdminChangePasswordModel,
    IAdminPermissionsModel,
    IAnnotationsModel,
    IAnnotationsQueryModel,
    IGraphiteAnnotationsModel,
    IAuthenticationModel,
    ICreateOrUpdateDashboardModel,
    IDashboardDifferencesModel,
    IDashboardMetaModel,
    IDashboardModel,
    IDashboardRestoreModel,
    IPanelModel,
    ITemplatingModel,
    ITimePickerModel,
    IFolderPermissionModel,
    IFolderPermissionsModel,
    IDatasourceModel,
    ISnapshotModel,
    ISnapshotQueryModel,
    ITeamMemberModel,
    ITeamModel,
    ITeamQueryModel,
    IAlertNotificationModel,
    IAlertQueryModel,
    IUserModel,
    IPreferencesModel,
    IChangePasswordModel,
};

export default GrafanaClient;
