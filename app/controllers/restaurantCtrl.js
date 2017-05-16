app.controller('restaurantCtrl', function($scope, getRestaurantsFactory, $routeParams){


  let thisRestaurant = $routeParams.restaurant_id;

  getRestaurantsFactory.getSingleRestaurant(thisRestaurant)
  .then((e) => {
    $scope.restaurant = e;
  })

});
