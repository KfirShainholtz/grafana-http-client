export default interface IDashboardMeta {
    isStarred?: boolean;
    canSave?: boolean;
    canEdit?: boolean;
    canStar?: boolean;
    url?: string;
    expires?: Date;
    created?: Date;
}
