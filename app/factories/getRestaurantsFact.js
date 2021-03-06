app.factory('getRestaurantsFactory', function($http){
  return {
    getAllRestaurants : () => {
      //get all the restaurantss from api
      return $http
      .get('https://similar-tastes-nashville-api.herokuapp.com/api/v1/restaurants')
      //parse the return from api, just returning the data object
      .then((e)=>{

        return e.data;
      })
      //turn the data object into an array
      .then((e)=>{
        let allRestaurants = e;
        return allRestaurants;
      });//end of then
    }, //end of getAllRestaurants()
    getSingleRestaurant : (id) => {
      //get single restaurant info
      return $http
      .get(`https://similar-tastes-nashville-api.herokuapp.com/api/v1/restaurants/${id}`)
      .then((e) => {
        return e.data
      })
      .then((e) => {

        return e;
      })
    }

  };//end of factory object
});//end of factory
