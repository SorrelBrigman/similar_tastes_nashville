app.factory('getRestaurantsFactory', function($http){
  return {
    getAllRestaurants : () => {
      //get all the products from api
      return $http
      .get('http://localhost:3000/api/v1/restaurants')
      //parse the return from api, just returning the data object
      .then((e)=>{
        console.log("e in restaurants factory", e)
        return e.data;
      })
      //turn the data object into an array
      .then((e)=>{
        let allRestaurants = e;
        return allRestaurants;
      });//end of then
    }, //end of getAllRestaurants()

  };//end of factory object
});//end of factory
