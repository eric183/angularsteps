var app = angular.module('myApp',[
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/',{
            templateUrl: 'views/first.html'
         }).
         when('/second',{
            templateUrl: 'views/second.html'
         }).
         when('/third',{
            templateUrl: 'views/third.html'
         }).
         when('/fourth',{
            templateUrl: 'views/fourth.html'
         }).
         otherwise({
            redirectTo: '/'
         });
    }]);