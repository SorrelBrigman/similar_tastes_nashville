app.factory('getReviewsFactory', function($http){
  return {
    getReviewPrediction : (user) => {
      //get all the products from api
      let restaurant_id = user.restaurant_id;
      let rating = user.rating;
      let restaurant_to_compare = user.restaurant_to_compare;
      return $http
      .get(`http://localthost:3000/api/v1/reviews/filtered?restaurant_id=${restaurant_id}&rating=${rating}&restaurant_to_compare=${restaurant_to_compare}`)
      //parse the return from api, just returning the data object
      .then((e)=>{
        console.log("e in reviews factory", e)
        return e.data;
      })
      //turn the data object into an array
      .then((e)=>{
        let filteredReviews = e;
        return filteredReviews;
      });//end of then
    }, //end of getAllRestaurants()

  };//end of factory object
});//end of factory
