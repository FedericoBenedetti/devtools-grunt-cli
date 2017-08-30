var App;
(function (App) {
    var Application;
    (function (Application) {
        var Config;
        (function (Config) {
            // File di configurazione per la gestione del multilingua
            // Imposta la lingua di default in base alla lingua preferita del browser.
            var lang = navigator.language.slice(0, 2);
            if (lang != 'it')
                lang = 'en';
            function translatorConfigBlock($translateProvider) {
                $translateProvider.translations('en', {
                    TEST: 'Test',
                });
                $translateProvider.translations('it', {
                    TEST: 'Prova',
                });
                $translateProvider.preferredLanguage(lang);
                //Bug di sicurezza traslate http://angular-translate.github.io/docs/#/guide/19_security
                $translateProvider.useSanitizeValueStrategy('escape');
            }
            // parte riguardante la "localizzazione"
            angular
                .module('app')
                .config(['$translateProvider', translatorConfigBlock]);
        })(Config = Application.Config || (Application.Config = {}));
    })(Application = App.Application || (App.Application = {}));
})(App || (App = {}));
;
//# sourceMappingURL=config.translate.js.map