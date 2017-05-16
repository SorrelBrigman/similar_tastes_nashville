app.controller('formCtrl', function($scope, getRestaurantsFactory, getReviewsFactory, $timeout, ){


      // $('.love-or-hate').hide();
      // $('.choose-type').hide();
      // $('.second-Rest').hide();

      $scope.questionNumber = 1;
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
      if (data.reviews[0] === undefined) {
        $scope.errorMessage = "We're sorry, but no one with similar tastes has reviewed there yet.  Try it out, you'll be a trend setter."
          return;
      }
      $scope.questionNumber = 5;
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
      if (data.length === 0) {
        $scope.errorMessage = "Believe it or not, but you're a unique snowflake, and your tastes are all your own.  Come back again soon, and hopefully your taste-twin will have recommendations for you the next time you stop through."
          return;
      }
      $scope.questionNumber = 6;
      let sortedReviews = getReviewsFactory.sortByRestaurant(data);
      let ratedReviews = getReviewsFactory.quantifyReviews(sortedReviews, $scope.user.restaurant_id);
      $scope.filteredReviews = getReviewsFactory.sortByHighestRated(ratedReviews);
    })
  }

  $scope.gaveRestaurant = () => {
    if($scope.user.restaurant_id === '') {
      //inform them to select a restaurant
      $scope.restaurantmessage = "You must select a restaurant to start"
      return
    }
      $scope.questionNumber = 2;
  }

  $scope.loveOrHate = () => {
    $scope.questionNumber = 3;
  }

  $scope.choosePredict = () => {
    $scope.questionNumber = 4;
  }

  $scope.back = () => {
    console.log("Back button");
    console.log("questionNumber", $scope.questionNumber)
    // $destroy($scope.errorMessage)
    $scope.questionNumber = 3;
  }

});
