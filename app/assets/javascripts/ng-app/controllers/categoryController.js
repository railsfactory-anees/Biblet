app.controller('categoryController',['$scope','myService','$routeParams','Product',function($scope,myService,$routeParams,Product){
	$("#catAlert").hide();
  alert("inside category controller")
 
	 var lang = $routeParams.id;

	 $scope.selectedLang=lang;

	 var myname ="sfs";
  /* $scope.products=myService.showBookBycategory(lang);*/

  Product.query().then(function (results) {
        $scope.products = results;
      
   
    });

   $scope.category=myService.getCategory();


   $scope.showByCategory= function(){
    alert("hi");

   };
  
  
}]);
