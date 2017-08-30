var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var AbstractController = App.Common.Controllers.AbstractController;
        class SamplePageController extends AbstractController {
            constructor(common) {
                super(common);
                this.init();
            }
            init() {
                this.activate('Sample Controller', []);
            }
        }
        SamplePageController.$inject = ['common'];
        angular.module('app')
            .controller('sample-page-controller', SamplePageController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=sample-page-controller.js.map