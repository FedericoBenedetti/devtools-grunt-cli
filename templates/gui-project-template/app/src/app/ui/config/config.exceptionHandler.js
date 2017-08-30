// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
var App;
(function (App) {
    var Application;
    (function (Application) {
        var Config;
        (function (Config) {
            class IExceptionHandlerConfig {
            }
            Config.IExceptionHandlerConfig = IExceptionHandlerConfig;
            ;
            // Extend the $exceptionHandler service to also display a toast.
            function extendExceptionHandler($delegate, config, logger) {
                var appErrorPrefix = config.appErrorPrefix;
                var logError = logger.getLogFn('app', 'error');
                return function (exception, cause) {
                    $delegate(exception, cause);
                    if (appErrorPrefix && exception.message && exception.message.indexOf(appErrorPrefix) === 0) {
                        return;
                    }
                    var errorData = { exception: exception, cause: cause };
                    var msg = appErrorPrefix + exception.message;
                    logError(msg, errorData, true);
                };
            }
            // Configure by setting an optional string value for appErrorPrefix.
            // Accessible via config.appErrorPrefix (via config value).
            function exceptionHandlerConfigBlock($provide) {
                $provide.decorator('$exceptionHandler', ['$delegate', 'config', 'logger', extendExceptionHandler]);
            }
            angular
                .module('app')
                .config(['$provide', exceptionHandlerConfigBlock]);
        })(Config = Application.Config || (Application.Config = {}));
    })(Application = App.Application || (App.Application = {}));
})(App || (App = {}));
//# sourceMappingURL=config.exceptionHandler.js.map