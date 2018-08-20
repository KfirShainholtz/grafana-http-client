export default interface IAnnotatinsQueryModel {
    from: number; // epoch time in ms
    to: number;
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
