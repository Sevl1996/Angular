'use strict';

var servicesModule    = angular.module('servicesModule',[]);
var controllersModule = angular.module('controllersModule', []);
var directivesModule  = angular.module('directivesModule', []);
var mainModule        = angular.module('mainModule', ['servicesModule', 'controllersModule', 'directivesModule']);

mainModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main',         {templateUrl: 'partials/list.jsp',      controller: ''});
    $routeProvider.when('/auth',         {templateUrl: 'partials/list.jsp',      controller: ''});
    
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
 