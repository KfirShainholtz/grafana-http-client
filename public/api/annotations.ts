import GrafanaHTTPApi from '../client/grafana-http-api';
import IAnnotationsQueryModel from './models/annotations/annotationsQueryModel';
import IAlertNotificationModel from './models/alertNotificationModel';
import UrlParsing, { UrlParseMethod } from './utils/url-parsing';
import IAnnotationModel from './models/annotations/annotationModel';
import IGraphiteAnnotationModel from './models/annotations/graphiteAnnotationModel';

export default class Annotations extends GrafanaHTTPApi {
    constructor(baseURL?: string, authKey?: string) {
        // TODO: add basic authentication
        super(baseURL);
    }

    findAnnotations(annotationsSearch: Partial<IAnnotationsQueryModel>) {
        return this.httpClient
        .get(`/api/annotations${UrlParsing.parseUrlParams(annotationsSearch, UrlParseMethod.DuplicateArrayEntries)}`);
    }

    createAnnotation(annotation: Partial<IAnnotationModel>) {
        return this.httpClient.post(`/api/annotations`, annotation);
    }

    createGraphiteAnnotation(annotation: Partial<IGraphiteAnnotationModel>) {
        return this.httpClient.post(`/api/annotations/graphite`, annotation);
    }

    updateAnnotation(annotationId: number, annotation: Partial<IAnnotationModel | IGraphiteAnnotationModel>) {
        return this.httpClient.put(`/api/annotations/${annotationId}`, annotation);
    }

    deleteAnnotationById(annotationId: number) {
        return this.httpClient.delete(`/api/annotations/${annotationId}`);
    }

    deleteAnnotationByRegionId(id: number) {
        return this.httpClient.delete(`/api/annotations/region/${id}`);
    }
}
