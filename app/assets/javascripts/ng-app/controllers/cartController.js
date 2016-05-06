app.controller('cartController',['$scope','Cart','Product',function($scope,Cart,Product){
   Product.query().then(function (products) {
  	 	$scope.products = products;
   });
   Cart.query().then(function (carts) {
	   $scope.carts = carts;
   });
   $scope.getTotal=function(carts){
   	  var sum = 0;
   	  angular.forEach($scope.carts,function(value,key){
  	  	for(i in value){
   	  		sum = sum + (value[i].totalPrice*1);
   	  	}
     })
      return sum;
   }
 
}]);
