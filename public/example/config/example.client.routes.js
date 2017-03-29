// retrives it from module and this does the routing
angular.module('example'.config(['$routeProvider',
	function($routeProvider) {
		
		$routeProvider.
		//define a new route along with the route URL
		when('/', {
			templateUrl: 'example/views/example.client.view.html'
		})
		otherwise({
			redirectTo: '/'
		});
	}
]);