///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';

const FRED_BASE_URL = "https://api.stlouisfed.org/";

export default class ChangeMyNameDatasource {
  id: number;
  name: string;
  fred_api_key: string;
  proxy_url: string;

  /** @ngInject */
  constructor(instanceSettings, private backendSrv, private templateSrv, private $q) {
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.fred_api_key = instanceSettings.jsonData.fred_api_key;
    this.proxy_url = instanceSettings.url;
  }

  query(options) {
    throw new Error("Query Support not implemented yet.");
  }

  annotationQuery(options) {
    throw new Error("Annotation Support not implemented yet.");
  }

  metricFindQuery(query: string) {
    throw new Error("Template Variable Support not implemented yet.");
  }

  testDatasource() {
    let test_url =  "/fred/category?category_id=125&file_type=json";
    test_url = this.proxy_url + "/" + test_url + "&api_key=" + this.fred_api_key;
    return this.backendSrv.datasourceRequest({
      url: test_url,
      method: "GET",
    }).then(resp => {
      if (resp.status === 200) {
        return {
          status: "success",
          message: "Data source is working",
          title: "Success"
        };
      } else {
        return {
          status: 'error',
          message: 'Data source not working, please check your API key again',
          title: 'Error'
        };
      }
    });
  }
}
