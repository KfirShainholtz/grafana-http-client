import { expect } from 'chai';
import * as moxios from 'moxios';
import Admin from '../../api/admin';
import Alerting from '../../api/alerting';
import Annotations from '../../api/annotations';
import IApiBearerAuth from '../../client/authentication/api-bearer-auth';
import IBasicAuth from '../../client/authentication/basic-auth';

describe('Grafana http api spec', () => {
    describe('Authentication specs', () => {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        const btoa = (str: string) => {
            let buffer;
            buffer = Buffer.from(str.toString(), 'binary');
            return buffer.toString('base64');
        };

        it('should use a basic auth authorization header when basicAuth key provided', (done) => {
            const login: IBasicAuth = {
                username: 'hello',
                password: 'hello',
            };

            // evaluates to 'Basic aGVsbG86aGVsbG8=', the actual basic auth. it's fun to learn!
            const basicAuth = `Basic ${btoa(login.username + ':' + login.password)}`;

            moxios.stubRequest('/api/admin/settings', {
                status: 200,
                responseText: 'hello',
            });

            const adminApi: Admin = new Admin('http://www.this.is.fake:1337', undefined, login);

            // initiate a valid axios request
            adminApi.getSettings();
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.headers!.Authorization!).to.equal(basicAuth);
                done();
            }, 200);
        });

        it('should use a bearer authorization auth header when apiBearerAuth provided', (done) => {
            const apiBearerAuth: IApiBearerAuth = {
                Authorization: 'Bearer 1337=',
            };

            moxios.stubRequest('/api/alerts', {
                status: 200,
                responseText: 'hello',
            });

            const alertingApi: Alerting = new Alerting('http://www.this.is.fake:1337', apiBearerAuth);

            // initiate a valid axios request
            alertingApi.getAlerts({});
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.headers!.Authorization!).to.equal('Bearer 1337=');
                done();
            }, 200);
        });

        // tslint:disable-next-line:max-line-length
        it('should toggle basic/bearer authentications after switching when using importing api components', async (done) => {
            const login: IBasicAuth = {
                username: 'hello',
                password: 'hello',
            };

            const basicAuth = `Basic ${btoa(login.username + ':' + login.password)}`;

            const apiBearerAuth: IApiBearerAuth = {
                Authorization: 'Bearer 1337=',
            };

            moxios.stubRequest('/api/annotations', {
                status: 200,
                responseText: 'hello',
            });

            moxios.stubRequest('/api/annotations/1', {
                status: 200,
                responseText: 'hello',
            });
            const annotationsApi: Annotations = new Annotations('http://www.this.is.fake:1337', apiBearerAuth, login);

            return Promise.all([annotationsApi.findAnnotations({}), annotationsApi.deleteAnnotationById(1)])
                .then(results => {
                    const getRequest = moxios.requests.get('/api/annotations');
                    const deleteRequest = moxios.requests.get('/api/annotations/1');

                    done();
                });
        });
    });
});
