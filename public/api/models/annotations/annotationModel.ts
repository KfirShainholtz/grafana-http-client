export default interface IAnnotationModel {
    dashboardId: number;
    panelId: number;
    time: number | string;
    isRegion: boolean;
    tags: string[];
    text: string;
}
