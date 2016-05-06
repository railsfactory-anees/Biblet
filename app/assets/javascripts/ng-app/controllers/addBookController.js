app.controller('addBookController',['$scope','myService','Product','$location','flash','$http',function($scope,myService,Product,$location,flash,$http){
 $( ".form-control" ).click(function() {
  $("#bookAlert").hide();

});
 Product.query().then(function (products) {
   $scope.products = products;
 });
 $scope.category=myService.getCategory();
 $scope.setFile = function(element) {
   $scope.$apply(function($scope) {
     $scope.book.fileModel= element.files[0];
   });
 };
 $scope.addBook = function() {
 
  var addBookForm = document.querySelector('form');
  var file = $scope.book.fileModel;
  var uploadUrl = '/products';

  var fd = new FormData(addBookForm);
  var name="mohammed ";
  var main = {name:$scope.book.name, lang:$scope.book.lang, price:$scope.book.price, pubdate:$scope.book.pubdate, avatar:$scope.book.fileModel, quantity:$scope.book.quantity}
  /* fd.append('data',file);*/
  $http.post(uploadUrl, fd, {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
  })
  .success(function(){
    flash.setMessage("book added succesfully");
    $location.path( "/home" );

  })
  .error(function(){
  });


};
}]);































/*for reffering purpose*/

   /* $scope.upload = function (file) {
            Upload.upload({
                url: '/products.json',
                method: 'POST',
                data: {file: file, 'product[name]':$scope.book.name,'product[lang]':$scope.book.lang,'product[price]': $scope.book.price, 'product[pubdate]': $scope.book.pubdate},
                 headers: {

                    'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
                }
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
         $scope.upload($scope.file);


         */
         /*console.log($scope.book.fileModel)*/
         /*var fm = {avatar_file_name:$scope.book.fileModel.name,avatar_content_type:$scope.book.fileModel.type,avatar_file_size:$scope.book.fileModel.size,avatar_updated_at:$scope.book.fileModel.lastModifiedDate}*//*angular.toJson($scope.book.fileModel); */
         /*var main = {name:$scope.book.name, lang:$scope.book.lang, price:$scope.book.price, pubdate:$scope.book.pubdate, avatar:$scope.book.fileModel}*/
         /*var recent = angular.extend(main);*/
         /* newPost.append('product[avatar]', $scope.book.fileModel);*/
/*  var newPost = new Product(main)
  console.log(newPost)
     newPost.create().then(function(result){
    console.log(result)
    $scope.products.push(result);
    flash.setMessage("book added succesfully");
    $location.path( "/home" );
  });*/

