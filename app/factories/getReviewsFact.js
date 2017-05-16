app.factory('getReviewsFactory', function($http){
  return {
    getReviewPrediction : (user) => {
      //get all the reviewss from api
      let restaurant_id = user.restaurant_id;
      let rating = user.rating;

      let restaurant_to_compare = user.restaurant_to_compare;
      return $http
      .get(`http://localhost:3000/api/v1/reviews/filtered?restaurant_id=${restaurant_id}&rating=${rating}&restaurant_to_compare=${restaurant_to_compare}`)
      //parse the return from api, just returning the data object
      .then((e)=>{

        return e.data;
      })
      //turn the data object into an array
      .then((e)=>{
        //parse out reviews
        let filteredReviews = e.rows;
        let findAverageReview = (reviews) => {
          let reviewTotal = 0;
          for(let i = 0; i < reviews.length; i++) {
            reviewTotal = reviewTotal + parseInt(reviews[i].rating)
          }
          return (reviewTotal/(reviews.length + 1))
        }
        let averageReview =  findAverageReview(filteredReviews);

        let reviewResponse = {
          reviews: filteredReviews,
          averageRating: averageReview
        }
        return reviewResponse;
      });//end of then
    }, //end of getAllRestaurants()
    getRecommendedRestaurants : (user) => {
      //get all the reviews from api
      let restaurant_id = user.restaurant_id;
      let rating = user.rating;
      return $http
      .get(`http://localhost:3000/api/v1/reviews?restaurant_id=${restaurant_id}&rating=${rating}`)
      //parse the return from api, just returning the data object
      .then((e)=>{
        return e.data;
      })
      //turn the data object into an array
      .then((e)=>{
        //parse out reviews
        let restReviews = e.rows;
        return restReviews;
      });//end of then
    }, //end of get Recommedned Restaurants
    sortByRestaurant : (reviews) => {
        reviews.sort((a,b) => {
        if(a.restaurant_id < b.restaurant_id)
          return -1;
        if (a.restaurant_id > b.restaurant_id)
          return 1;
        return 0;
      })

      return reviews;
    },
    removeDuplicates : (reviews, restaurant) => {
      let uniqueRestaurants = []
      if (reviews[0].restaurant_id !== restaurant) {
        uniqueRestaurants.push(reviews[0]);
      }
      for(let i = 1; i < reviews.length; i++) {
        if(reviews[i].restaurant_id === reviews[i-1].restaurant_id) {
        }
        else if (reviews[i].restaurant_id === restaurant){

        }else {

        uniqueRestaurants.push(reviews[i])
        }
      }
      return uniqueRestaurants
    },
    quantifyReviews : (reviews, restaurant) => {
      let ratedRestaurants = []
      // if (reviews[0].restaurant_id !== restaurant) {
      //   uniqueRestaurants.push(reviews[0]);
      // }
      for(let i = 1; i < (reviews.length + 1); i++) {
        if(reviews[i] === undefined) {

        } else if(reviews[i].restaurant_id === reviews[i-1].restaurant_id) {
          reviews[i].rating = reviews[i].rating + reviews[i-1].rating;
        }
        else if (reviews[i-1].restaurant_id === restaurant){

        } else {
        ratedRestaurants.push(reviews[i-1])
        }
      }
      return ratedRestaurants
    },
    sortByHighestRated : (reviews) => {
        reviews.sort((a,b) => {
        if(a.rating > b.rating)
          return -1;
        if (a.rating < b.rating)
          return 1;
        return 0;
      })

      return reviews;
    }


  };//end of factory object
});//end of factory
