export default interface IPanelModel {
    type: string;
    title: string;
    gridPos: IGridPos;
    id: number;
    mode: string;
    content: string;
}

interface IGridPos {
    x: number;
    y: number;
    w: number;
    h: number;
}
