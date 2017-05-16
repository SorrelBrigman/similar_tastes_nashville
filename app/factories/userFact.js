app.factory('userFactory', function(){
  let user = {};
  user.set = false;
  return {
    getUser : () => {
      //get the current user object
      console.log("trying to get user")
      return user;
    }, //end of getUser()
    setUser : (info) => {
      user.set = true;
      user.restaurant_id = info.restaurant_id;
      user.rating = info.rating;
      console.log("setUser from fact", user);
      // return user;
    },
    resetUser : () => {
      user.set = false;
      user.restaurant_id = "";
      user.rating = "";
    }

  };//end of factory object
});//end of factory
