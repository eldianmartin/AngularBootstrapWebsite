var app = angular.module('EstalaseApp', ['ngRoute', 'ngAnimate', 'toaster']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
	 when('/', {
        title: 'Home',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl',

    }).
    when('/products', {
        title: 'Products',
        templateUrl: 'partials/products.html',
        controller: 'productsCtrl',

    })
    .when('/product-detail/:productid', {
        title: 'Products Detail',
        templateUrl: 'partials/product-detail.html',
        controller: 'productDetailCtrl',
     
    })
     .otherwise({
        redirectTo: '/'
    });
    
}])

app.controller('masterCtrl', function ($scope) {
    
});
