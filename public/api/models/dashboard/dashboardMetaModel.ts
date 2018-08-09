export default interface IDashboardMetaModel {
    isStarred?: boolean;
    canSave?: boolean;
    canEdit?: boolean;
    canStar?: boolean;
    url?: string;
    expires?: Date | string;
    created?: Date | string;
}
