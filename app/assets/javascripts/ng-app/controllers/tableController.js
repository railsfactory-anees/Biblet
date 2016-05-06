app.controller('tableController',['$scope','myService','Product',function($scope,myService,Product){
 /*$scope.products=myService.getProducts();*/
 Product.query().then(function (products) {
   $scope.products = products;
 });


 $scope.category=myService.getCategory();
 var productName = "";
 var productPrice = "";
 $scope.rowDelete = function(product) {
    
    product.remove().then(function(result){
        var index = $scope.products.indexOf(result)
        if (index>-1) $scope.products.splice(index,1)
          alert("book deleted succesfully")
      })

};
$scope.rowEdit = function(product) {
/*var newPost = new Product({name:product.name,price:product.price});*/
   product.update().then(function(result){
   $scope.products.push(result)
   alert("book updated succesfully")
})

  
  
};
}]);
