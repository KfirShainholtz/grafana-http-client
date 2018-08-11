export default interface IGraphiteAnnotationModel {
    what: string;
    tags: string[];
    when: string | number;
    data: string;
}
