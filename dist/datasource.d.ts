/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class ChangeMyNameDatasource {
    private backendSrv;
    private templateSrv;
    private $q;
    id: number;
    name: string;
    fred_api_key: string;
    proxy_url: string;
    /** @ngInject */
    constructor(instanceSettings: any, backendSrv: any, templateSrv: any, $q: any);
    query(options: any): void;
    annotationQuery(options: any): void;
    metricFindQuery(query: string): void;
    testDatasource(): any;
}
