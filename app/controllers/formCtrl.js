app.controller('formCtrl', function($scope, getRestaurantsFactory, getReviewsFactory, $timeout){
  console.log("hello from formCtrl")

      // $('.love-or-hate').hide();
      // $('.choose-type').hide();
      // $('.second-Rest').hide();

      $scope.questionNumber = 1;
      console.log("questionNumber", $scope.questionNumber)
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

    //  $timeout(function () {
    //  $("select").chosen({no_results_text: "Oops, nothing found!"});
    // }, 0, false);
  });


  $scope.user = {
    restaurant_id: '',
    rating: '',
    restaurant_to_compare: ''
  }



  $scope.predictReview = () => {
    console.log("user", $scope.user);
    $('.second-Rest').hide();
    $('.tastes').hide();
    getReviewsFactory.getReviewPrediction($scope.user)
    .then((data) => {
      console.log("reviews returned",data);

      if (data.reviews[0] === undefined) {
        $scope.errorMessage = "We're sorry, but no one with similar tastes has been there yet.  Try it out, you'll be a trend setter."
          return;
      }
      $scope.reviewed = {
        name: data.reviews[0].name,
        number: data.reviews.length,
        averageRating: parseInt(data.averageRating),
        id: data.reviews[0].restaurant_id
      }

    })
  }

  $scope.getRecommendations = () => {
    $('.choose-type').hide();
    $('.tastes').hide();
    getReviewsFactory.getRecommendedRestaurants($scope.user)
    .then((data) => {
      console.log("data from controller", data);
      if (data.length === 0) {
        $scope.errorMessage = "Believe it or not, but you're a unique snowflake, and your tastes are all your own.  Come back again soon, and hopefully your taste-twin will have recommendations for you the next time you stop through."
          return;
      }
      let sortedReviews = getReviewsFactory.sortByRestaurant(data);
      $scope.filteredReviews = getReviewsFactory.removeDuplicates(sortedReviews, $scope.user.restaurant_id);
      console.log("filteredReviews", $scope.filteredReviews);
    })
  }

  $scope.gaveRestaurant = () => {
    console.log("user info", $scope.user)
    if($scope.user.restaurant_id === '') {
      //inform them to select a restaurant
      $scope.restaurantmessage = "You must select a restaurant to start"
      return
    }
      $scope.questionNumber = 2;
      console.log("questionNumber", $scope.questionNumber)
  }

  $scope.loveOrHate = () => {
    $scope.questionNumber = 3;
    console.log("questionNumber", $scope.questionNumber)
  }

  $scope.choosePredict = () => {
    $scope.questionNumber = 4;
    console.log("questionNumber", $scope.questionNumber)
  }

});
