import { expect } from 'chai';
import * as moxios from 'moxios';
import Admin from '../../api/admin';
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

        it('should use a basic auth authorization header when basicAuth key provided', (done) => {
            const basicAuth: IBasicAuth = {
                username: 'hello',
                password: 'hello',
            };

            moxios.stubRequest('/api/admin/settings', {
                status: 200,
                responseText: 'hello'
              });

            const adminApi: Admin = new Admin('http://www.this.is.fake:1337', undefined, basicAuth);

            // initiate a valid axios request
            adminApi.getSettings();
            
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.headers!.Authorization!).to.equal('Basic aGVsbG86aGVsbG8=');
                done();
            }, 200);
        });

        it('should use a bearer authorization auth header when apiBearerAuth provided', (done) => {
            const apiBearerAuth: IApiBearerAuth = {
                Authorization: 'Bearer 1337=',
            };

            moxios.stubRequest('/api/admin/settings', {
                status: 200,
                responseText: 'hello'
              });

            const adminApi: Admin = new Admin('http://www.this.is.fake:1337', apiBearerAuth);

            // initiate a valid axios request
            adminApi.getSettings();
            
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                expect(request.headers!.Authorization!).to.equal('Bearer 1337=');
                done();
            }, 200);
        });
    });
});
