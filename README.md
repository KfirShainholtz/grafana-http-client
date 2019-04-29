# grafana-http-client
An unofficial grafana http client for javascript applications.

## Tests:
(TODO): The integration tests are using a grafana server instance to validate
the current API.

## Setup & Usage:
```
export const GrafanaConnection = {
    "Host": "http://localhost:3000",
    "BearerAuthorization": "<your bearer authentication>",
    "BasicAuth": {
        "username": "<username>",
        "password": "<password>"
    }
}
```
```
export default class GrafanaProxy {
    grafanaClient: GrafanaClient;
    
    constructor() {
        const basicAuth: IBasicAuth = {
            username: GrafanaConnection.BasicAuth.username,
            password: GrafanaConnection.BasicAuth.password,
        }
        this.grafanaClient = new GrafanaClient(GrafanaConnection.Host, undefined, basicAuth); 
        // or you can use bearer auth, or both. 
        // visit https://grafana.com/docs/http_api/ to figure out which authentication is needed for your purposes
    }

    async createUser(user: IUserModel) {
        const [err, data]: [any, any] = await to(this.grafanaClient.admin.createNewUser(user));
    }
}
```
