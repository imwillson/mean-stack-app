var appName = 'mean';
//every angular js application has one module
// for separation of code purposes
// second paramter lists the dependencies app relies on
var app = angular.module(appName, ['ngRoute','example', 'users']); //used to pass to html


angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});


//solves facebook authentication bug of extra #
if (window.location.hash === '#_=_') window.location.hash = '#!';

//single page application routes, need hashbangs! #!
//configs the app into a single page
app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);


// the entire angular js application will be
//in the public folder of the xpress app



//ng app directives extended the HTML 
// There are 4 main core directives (ng-app,
//ng-controller,ng-model,ng-repeat and ng-show/ng-hide)

//A directive is essentially a function† that 
//executes when the Angular compiler finds it in the DOM. 

//scope objects, bond between view and controller
//Both controllers and directives have reference to the scope, but not to each other. 
//This arrangement isolates the controller from the directive as well as from the DOM


// angular.module('scopeExample', [])
// .controller('MyController', ['$scope', function($scope) {
//   $scope.username = 'World';

//   $scope.sayHello = function() {
//     $scope.greeting = 'Hello ' + $scope.username + '!';
//   };
// }]);


// <div ng-controller="MyController">
//   Your name:
//     <input type="text" ng-model="username">
//     <button ng-click='sayHello()'>greet</button>
//   <hr>
//   {{greeting}}
// </div>

//dependncy injection is good for testing 