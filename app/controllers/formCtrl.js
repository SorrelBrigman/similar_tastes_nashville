app.controller('formCtrl', function($scope, getRestaurantsFactory, getReviewsFactory){
  console.log("hello from formCtrl")
  getRestaurantsFactory.getAllRestaurants()
  .then((restaurants) => {


    //put restaurants in alphabetically order for ease of use
    restaurants.sort((a,b) => {
    if(a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  })
    $scope.restaurants = restaurants;
  });


  $scope.user = {
    restaurant_id: '',
    rating: '',
    restaurant_to_compare: ''
  }



  $scope.predictReview = () => {
    console.log("user", $scope.user);
    getReviewsFactory.getReviewPrediction($scope.user)
    .then((data) => {
      console.log("reviews returned",data);
      $scope.reviewed = {
        name: data.reviews[0].name,
        number: data.reviews.length,
        averageRating: parseInt(data.averageRating),
        id: data.reviews[0].restaurant_id
      }

    })
  }

  $scope.getRecommendations = () => {
    getReviewsFactory.getRecommendedRestaurants($scope.user)
    .then((data) => {
      console.log("data from controller", data)
      let sortedReviews = getReviewsFactory.sortByRestaurant(data);
      $scope.filteredReviews = getReviewsFactory.removeDuplicates(sortedReviews, $scope.user.restaurant_id);
      console.log("filteredReviews", $scope.filteredReviews);
    })
  }

});
