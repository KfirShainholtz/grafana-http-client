export default interface IAnnotatinsQueryModel {
    from: number | string; // epoch time in ms
    to: number | string;
    limit: number;
    alertId: number;
    dashboardId: number;
    panelId: number;
    userId: number;
    type: string;
    tags: string[];
}

export enum AnnotationsType {
    Alert = 'alert', Annotation = 'annotation',
}
