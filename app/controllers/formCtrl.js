app.controller('formCtrl', function($scope, getRestaurantsFactory){
  console.log("hello from formCtrl")
  getRestaurantsFactory.getAllRestaurants()
  .then((restaurants) => {

    restaurants.sort((a,b) => {
    if(a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  })
    $scope.restaurants = restaurants;
  })


});
