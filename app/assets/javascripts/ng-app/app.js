var app = angular.module('AngularRails', ['ngRoute','templates','rails'])
 /*   app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
        $locationProvider.html5Mode(true);
    });
*/

app.config(function($routeProvider,$locationProvider) {
  $routeProvider
        // route for the home page
        .when('/head', {
          templateUrl : 'home.html',
          controller  : 'HomeCtrl'
        })
        .when('/home', {
          templateUrl : 'home.html',
          controller  : 'HomeCtrl'
        })
        .when('/gallery', {
          templateUrl : 'gallery.html',
          controller  : 'HomeCtrl'
        })
        /*.when('/showBooks/:id', {
          templateUrl : 'gallery.html',
          controller  : 'categoryController'
        })
*/

        // route for the add book page
        .when('/addBook', {
          templateUrl : 'addBook.html',
          controller  : 'addBookController'

        })

        // route for the table view page
        .when('/tableView', {
          templateUrl : 'tableView.html',
          controller  : 'tableController'
        })
        .when('/carts', {
          templateUrl : 'cart.html',
          controller  : 'cartController'
        })
        .otherwise({
          redirectTo:'/head'
        });
        
      });

app.factory('Product',['railsResourceFactory',function(railsResourceFactory){

 return railsResourceFactory({url:'/products', name: 'product' ,pluralName: 'products' });

}]);
app.factory('Cart',['railsResourceFactory',function(railsResourceFactory){

 return railsResourceFactory({url:'/order_items', name: 'cart',pluralName: 'carts'});

}]);
app.factory('Review',['railsResourceFactory',function(railsResourceFactory){

 return railsResourceFactory({url:'/reviews', name: 'review' ,pluralName: 'reviews' });

}]);


app.factory("flash", function($rootScope) {
  var queue = [];
  var currentMessage = "";

  $rootScope.$on("$routeChangeSuccess", function() {
    currentMessage = queue.shift() || "";
  });
  

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      return currentMessage;
    }
  };
}); 
