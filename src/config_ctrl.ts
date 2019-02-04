///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

export class ChangeMyNameConfigCtrl {
  static templateUrl = 'partials/config.html';
  current: any;

  constructor($scope) {
    this.current.access = 'proxy';
    this.current.url = 'https://api.stlouisfed.org';
  }
}
