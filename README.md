# similar_tastes_nashville


App concept: A restaurant recommendation app that will take user input and return only reviews from similar users.

This is the user interface for Similar Taste API, the repo can be found here:
https://github.com/SorrelBrigman/backend_capstone

The backend repo contains mockups, links to the trello board for planning and additional notes about the backend of the site.


# technology used:

* HTML
* CSS
* JavaScript
* jQuery 3.2.1
* Bootstrap 3.3.7
* Angular 1.6.4
* Angular-Route 1.6.4
* Chosen 1.7.0
* Angular-Chosen-Localytics 1.6.0


# Current App Features Include:

## Restaurant Recommendation:
  Calls API with user selected main restaurant (a restaurant they feel passionately about).

  Calls API with the direction of their passions (do they love or hate it)
  Returns all reviews for users with similar sentiments toward the main restaurant (love equates to a Yelp review of 4 or 5 stars, hate equates to a Yelp review of 1 or 2 stars).

  Sorts through all returned reviews (reviews by similar users that also rated the restaurant 4 or 5 stars), and sorts them by popularity.

  Displays the top five restaurants.

## Restaurant Review Prediction
  Calls API with user selected main restaurant (a restaurant they feel passionately about), user passions (do they love or hate the main restaurant) and what restaurant they want a review prediction for (second restaurant).

  Returns all reviews for the second restaurant by users with similar sentiments.
  Averages all of the reviews, and displays the average review for the second restaurant as a review prediction.

## Restaurant Information
  Displays basic restaurant information, including a clickable link to the restaurant's website.

## FrontEnd "Session Presistence"
  Once the user has entered their main restaurant and the direction of their passions toward that restauarnt, all other recommendations and predictions will be based off of that baseline until the user either refreshes the page or clicks a "Start Over" button.


## Contributor: Sorrel Brigman https://github.com/SorrelBrigman
