///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var FRED_BASE_URL, ChangeMyNameDatasource;
    return {
        setters:[],
        execute: function() {
            FRED_BASE_URL = "https://api.stlouisfed.org/";
            ChangeMyNameDatasource = (function () {
                /** @ngInject */
                function ChangeMyNameDatasource(instanceSettings, backendSrv, templateSrv, $q) {
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.$q = $q;
                    this.name = instanceSettings.name;
                    this.id = instanceSettings.id;
                    this.fred_api_key = instanceSettings.jsonData.fred_api_key;
                    this.proxy_url = instanceSettings.url;
                }
                ChangeMyNameDatasource.prototype.query = function (options) {
                    throw new Error("Query Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.annotationQuery = function (options) {
                    throw new Error("Annotation Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.metricFindQuery = function (query) {
                    throw new Error("Template Variable Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.testDatasource = function () {
                    var test_url = "/fred/category?category_id=125&file_type=json";
                    test_url = this.proxy_url + "/" + test_url + "&api_key=" + this.fred_api_key;
                    return this.backendSrv.datasourceRequest({
                        url: test_url,
                        method: "GET",
                    }).then(function (resp) {
                        if (resp.status === 200) {
                            return {
                                status: "success",
                                message: "Data source is working",
                                title: "Success"
                            };
                        }
                        else {
                            return {
                                status: 'error',
                                message: 'Data source not working, please check your API key again',
                                title: 'Error'
                            };
                        }
                    });
                };
                return ChangeMyNameDatasource;
            })();
            exports_1("default", ChangeMyNameDatasource);
        }
    }
});
//# sourceMappingURL=datasource.js.map