import { TemplatingType } from './dashboardModelTypes';

export default interface ITemplatingModel {
    enable: boolean;
    list: {}[];
    allFormat: string; // todo: create interface
    current: ITextValuePair;
    datasource: string; // ?
    includeAll: boolean;
    multi: boolean;
    multiFormat: string; // same as all format
    name: string;
    options: ITextValuePair[];
    Query: string;
    refresh: undefined;
    regex: undefined;
    type: TemplatingType;
}

interface ITextValuePair {
    text: string;
    value: string;
}
