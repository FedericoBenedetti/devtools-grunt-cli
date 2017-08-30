var App;
(function (App) {
    var Application;
    (function (Application) {
        var Config;
        (function (Config) {
            // Configure the routes and route resolvers
            class RouteConfiguratorConfigBlock {
                constructor($routeProvider, routes, glRouteAuthServiceProvider, glUiAuthServiceProvider) {
                    this.$routeProvider = $routeProvider;
                    this.routes = routes;
                    this.glRouteAuthServiceProvider = glRouteAuthServiceProvider;
                    this.glUiAuthServiceProvider = glUiAuthServiceProvider;
                    glRouteAuthServiceProvider.configRoutes(routes);
                    routes.forEach((r) => {
                        $routeProvider.when(r.url, r.config);
                    });
                    //$routeProvider.when("/documento/35934920-96e3-4813-bf21-7a7d0547be49", { redirectTo: "blob:http://localhost:51555/35934920-96e3-4813-bf21-7a7d0547be49" });
                    $routeProvider.otherwise({ redirectTo: '/' });
                }
            }
            // Define the routes 
            // "documento/35934920-96e3-4813-bf21-7a7d0547be49"
            // "blob:http://localhost:51555/35934920-96e3-4813-bf21-7a7d0547be49"
            class RouteConfigFactory {
                static getRoutes() {
                    return [
                        {
                            url: '/',
                            config: {
                                title: 'sample',
                                templateUrl: 'app/ui/app-pages/sample-page/sample-page.html',
                                settings: {
                                    nav: 2,
                                    //Style : Icon Menu http://fortawesome.github.io/Font-Awesome/icons/
                                    content: 'SIDEBAR_HOME',
                                    icon: '<i class="fa fa-lock"></i>'
                                }
                            },
                            authorization: {
                                isLoginRoute: true,
                                isUnauthorizedRoute: true,
                                loginRequired: false,
                                roles: []
                            }
                        }
                    ];
                }
            }
            // Collect the routes
            angular.module('app')
                .constant('routes', RouteConfigFactory.getRoutes())
                .config(['$routeProvider', 'routes', 'glRouteAuthServiceProvider', 'glUiAuthServiceProvider', RouteConfiguratorConfigBlock]);
        })(Config = Application.Config || (Application.Config = {}));
    })(Application = App.Application || (App.Application = {}));
})(App || (App = {}));
//# sourceMappingURL=config.route.js.map