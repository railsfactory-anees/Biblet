app.service('myService',['$http',function($http){

   /*service for file upload start here*/
   /*this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }*/
     /*service for file upload end here here*/


	 $("#catAlert").hide();
	 $("#bookAlert").hide();
	
	var category=[{name:'english',cover:'http://www.planwallpaper.com/static/images/europe-english-teaching-abroad-map11.gif'},
	              {name:'malayalam',cover:'http://www.planwallpaper.com/static/images/europe-english-teaching-abroad-map11.gif'},
	              {name:'hindi',cover:'http://www.planwallpaper.com/static/images/europe-english-teaching-abroad-map11.gif'},
	              {name:'tamil',cover:'http://www.planwallpaper.com/static/images/europe-english-teaching-abroad-map11.gif'}];
  var products = [ {
    name : 'Mayaavi',
    lang:'malayalam',
    price : 8,
    pubdate : new Date('2013', '08', '01'), 
    cover : 'http://www.planwallpaper.com/static/images/9-credit-1.jpg',
    likes : 0,
    dislikes : 0,
    reviews : [ {
      name : "Anees@gmail.com",
      star : 1,
      comments : "good but"
    } ],
    description : 'Mayavi, the protagonist in the series',
    editBtn : "Edit",
    deleteBtn : "Delete",
    showInput : true
  }];
  this.getSucccesMsg=function(){
    return "book added succesfully";
  }
  this.getProducts=function(){

    
    return products;
  };
  this.getCategory=function(){
	return category;  
  };
  this.showBookBycategory=function(lang){
	
	  
	  var result = [];
      
	  for (var i = 0; i < products.length; i++) {
		  if (products[i].lang === lang) {
			  result.push(products[i]);
			 
			  }
		    

		   
		  
	  }
	  return result;
	  
	  
	  
  };
  
}]);