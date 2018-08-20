export default interface IAlertNotificationModel {
    id: number;
    name: string;
    type: AlertNotifiers;
    isDefault: boolean;
    created: Date | string;
    updated: Date | string;
}

export enum AlertNotifiers {
    Slack = 'slack',
    Pagerduty = 'pagerduty',
    Email = 'email',
    Webhook = 'webhook',
    Kafka = 'kafka',
    VictorOps = 'victorops',
    Sensu = 'sensu',
    OpgGenie = 'opsgenie',
    Threema = 'threema',
    Pushover = 'pushover',
    Telegram = 'telegram',
    Line = 'line',
    PrometheusAlertmanager = 'prometheus-alertmanager',
}
