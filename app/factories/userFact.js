app.factory('userFactory', function(){
  return {
    getUser : () => {
      //get all the products from api
      return $http
      .get('http://localhost:3000/api/v1/restaurants')
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
    setUser : (id) => {
      //get single restaurant info
      return $http
      .get(`http://localhost:3000/api/v1/restaurants/${id}`)
      .then((e) => {
        return e.data
      })
      .then((e) => {

        return e;
      })
    }

  };//end of factory object
});//end of factory
