app.controller('HomeCtrl',['$scope','myService','Product','Review','flash','$location','Cart',function($scope,myService,Product,Review,flash,$location,Cart) {
  $scope.flash = flash;
  $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
    $("#success-alert").alert('close');
  });
  $scope.succesMsg=null;
  $scope.products=[];
  
  $scope.category=myService.getCategory();
  Product.query().then(function (products) {
   $scope.products = products;
 });
  Cart.query().then(function (carts) {
   $scope.carts = carts;
 });
  $scope.showByCategory= function(name){
   $(".cat_img").on("click", function(){
       $(".cat_img.highlight").removeClass("highlight"); //Remove any "active" class  
       $(this).addClass("highlight"); //Add "active" class to selected tab  
     });
   $scope.selectedLang=name;
   Product.query({lang: name}).then(function (result) {
     $scope.products = result;
   });
 };
 $scope.addReview = function(product){
  var newPost = new Review({name: $scope.review.name,star: $scope.review.star,comments: $scope.review.comments,product_id: product.id});
  if($scope.review.length!=0){
    newPost.create().then(function(result){

      product.reviews.push($scope.review)
      $scope.review="";
      flash.setMessage("review updated succesfully");
      $location.path("/home");
      
    })}else{
      $scope.review="";
    };
  };

  $scope.plusOne = function(index1) {
    alert(index1);
    $scope.products[index1].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  $scope.review = {};

  $scope.newCategory={
    'cover':"images/hindi.jpg"
  };

  $scope.addNewCategory=function(Category){
     Category.push($scope.newCategory);
     $("#catAlert").show();
     $scope.newCategory={
        'cover':"images/hindi.jpg"
      };
   };
$scope.addToCart=function(product){
 Cart.query().then(function (carts) {
    var cart_items=carts.orderItems;
    if(checkItemExists(cart_items,product)){
     addItemtoCart(cart_items,product);
   }
 });
} 
function checkItemExists(cart_items,product){
  var status = false;
  if(cart_items.length!=0){
    for (var i = cart_items.length - 1; i >= 0; i--) {
      if(cart_items[i].productId === product.id){
        status = false;
        break;
      }else if(cart_items[i].productId !== product.id){
        status=true;
        continue;
      }
    }
  }else if(cart_items.length == 0){
    status = true;
  }
  return status;
}

function addItemtoCart(cart_items,product){
   var cartItem = new Cart({product_id: product.id,quantity: product.quantity});
  cartItem.create().then(function(result){
   
    $location.path( "/carts" );
  });
}
}] );