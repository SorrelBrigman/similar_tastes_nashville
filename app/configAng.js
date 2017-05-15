//assign the angular module to the var app
var app = angular.module("similarTastesApp", ['ngRoute']);

//configure "app" with routeProvider
app.config(($routeProvider)=> {
  $routeProvider
    //when at the base page
    .when("/", {
      //use the Home Ctrl
      controller: "homeCtrl",
      //use the partial "home"
      templateUrl : "partials/home.html"
    })
    .when("/recommendations", {
      // use the add product ctrl
      controller: "formCtrl",
      //use the partial "addProduct"
      templateUrl: "partials/form.html"
    })
    .when("/restaurants/:restaurant_id", {
      // use the add product ctrl
      controller: "restaurantCtrl",
      //use the partial "addProduct"
      templateUrl: "partials/restaurantInfo.html"
    })
    .when("/about", {
      // use the add product ctrl
      controller: "aboutCtrl",
      //use the partial "addProduct"
      templateUrl: "partials/about.html"
    })
    .otherwise({
      redirectTo: "/"
    })
});
