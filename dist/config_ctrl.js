///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var ChangeMyNameConfigCtrl;
    return {
        setters:[],
        execute: function() {
            ChangeMyNameConfigCtrl = (function () {
                function ChangeMyNameConfigCtrl($scope) {
                    this.current.access = 'proxy';
                    this.current.url = 'https://api.stlouisfed.org';
                }
                ChangeMyNameConfigCtrl.templateUrl = 'partials/config.html';
                return ChangeMyNameConfigCtrl;
            })();
            exports_1("ChangeMyNameConfigCtrl", ChangeMyNameConfigCtrl);
        }
    }
});
//# sourceMappingURL=config_ctrl.js.map