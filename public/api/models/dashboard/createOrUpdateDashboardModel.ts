import IDashboardModel from './dashboardModel';

export default interface ICreateOrUpdateDashboardModel {
    dashboard: IDashboardModel;
    folderId: number; // TODO: check if numbers only
    overwrite: boolean;
}

/*** dashboard example
  "dashboard": {
    "annotations": {
      "list": [
        {
          "builtIn": 1,
          "datasource": "-- Grafana --",
          "enable": true,
          "hide": true,
          "iconColor": "rgba(0, 211, 255, 1)",
          "name": "Annotations & Alerts",
          "type": "dashboard"
        }
      ]
    },
    "editable": true,
    "gnetId": null,
    "graphTooltip": 0,
    "id": null,
    "links": [],
    "panels": [],
    "schemaVersion": 16,
    "style": "dark",
    "tags": [],
    "templating": { "list": [] },
    "time": { "from": "now-6h", "to": "now" },
    "timepicker": {
      "refresh_intervals": ["5s", "10s", "30s", "1m", "5m", "15m", "30m", "1h", "2h", "1d"],
      "time_options": ["5m", "15m", "1h", "6h", "12h", "24h", "2d", "7d", "30d"]
    },
    "timezone": "",
    "title": "New dashboard Copy",
    "uid": "",
    "version": 0,
    "hideControls": false
  },
  "overwrite": false,
  "message": ""
}
***/
