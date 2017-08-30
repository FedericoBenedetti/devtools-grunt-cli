/**
@ngdoc object
@name app:config
@requires angular.commonConfigProvider
@requires angular.$logProvider
@description
File di configurazione delle info dell'applicazione
*/
(function () {
    'use strict'; //il javascript si ferma quando ci sono errori
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        // Custom modules 
        'common',
        'common.bootstrap',
        // 3rd Party Modules
        'ui.bootstrap',
        'ui.router',
        'pascalprecht.translate',
        // Moduli GL
        'gl-security-module',
        'gl-default-layout',
    ]).run(['$route', '$rootScope', '$templateCache', function ($route, $rootScope) {
            // Abbiamo bisogno di questo run block (anche se vuoto) per inizializzare $route, PRIMA che avvenga la prima navigazione
            // Senza questo blocco run l'applicazione parte ma non carica il prim template della home.
        }]);
    // Configure Toastr
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-bottom-right';
    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };
    var config = {
        appErrorPrefix: '[Error] ',
        docTitle: 'GruppoLoccioni: ',
        events: events,
        version: '0.0.1'
    };
    app.value('config', config);
    app.config(['$logProvider', function ($logProvider) {
            // turn debugging off/on (no info or warn)
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
        }]);
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg) {
            cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
            cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
        }]);
    //#endregion
    ///**************************************
    ///            PERSONALIZZATO
    ///**************************************
    app.constant("appConfig", {
        // This is used by gl-security-module to get user's token
        security: {
            clientId: "appClient",
            clientSecret: "hardtoguess"
        },
    });
    ///**************************************
})();
//# sourceMappingURL=app.js.map