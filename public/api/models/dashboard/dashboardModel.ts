import { Timezone, Theme, GraphToolTips } from '../preferences/preferencesModel';
import ITimePickerModel from './timepickerModel';
import ITemplatingModel from './templatingModel';
import IPanelModel from './panelModel';
import IAnnotationModel from '../annotations/annotationModel';

export default interface IDashboardModel { // todo: just use partial
    id?: string; // null to create new
    uid?: string;
    title: string;
    tags: string[];
    style?: Theme;
    graphToolTip: GraphToolTips;
    time?: string;
    timepicker?: ITimePickerModel;
    templating?: ITemplatingModel;
    annotations?: IAnnotationModel;
    refresh?: number;
    timezone: Timezone;
    schemaVersion?: number;
    version?: number;
    message?: string;
    panels?: IPanelModel[];
}
