app.controller('restaurantCtrl', function($scope, getRestaurantsFactory, $routeParams){


  let thisRestaurant = $routeParams.restaurant_id;
  console.log("routeParams", thisRestaurant)
  getRestaurantsFactory.getSingleRestaurant(thisRestaurant)
  .then((e) => {
    console.log("results from loading this page", e)
    $scope.restaurant = e;
  })

});
