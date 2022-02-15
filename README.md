# Rancid Tomatillos

## Deployed Site

View the deployed site [here](https://rancidtomatillos2110.herokuapp.com/)!

## Table of Contents   

  - [Abstract](#abstract)
  - [Project Goals](#project-goals)
  - [Challenges](#challenges)   
  - [Project Specs](#project-specs)   
  - [Install & Setup](#set-up)
  - [Deployed Site](#deployed-site)
  - [api](#api)   
  - [Tech Stack](#tech-stack)  
  - [Contributors](#contributors)   

## Abstract

Looking for a new movie to watch? Welcome to Rancid Tomatillos! This is a web app that provides a list of movies, their Rancid Tomatillo rating, and details about the movie's runtime, synopsis, genre, and budget, and revenue. Keep track of your opinion on each movie by logging in and leaving your own rating.

## Project Goals

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router
- Build an api using Express and deploy to Heroku
- Learn and implement Cypress end to end testing


## Project Specs

View the spec for this project [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html).

When the Rancid Tomatillos app loads, the user will see the home page with all movies displayed. Each movie card includes the movie's cover photo, title, and Rancid Tomatillo rating.

View all movies:
 <img src="https://media.giphy.com/media/2JmJuA5i3DQMUupljb/giphy-downsized-large.gif" width="75%">

When a user clicks on a movie card, they are brought to a new page that displays additional details for that movie. If data is missing for a movie's details, a message is shown letting users know that information is unavailable. The user can click the "back" button to navigate back to the home page and view all movies.

View a single movie's details:
 <img src="https://media.giphy.com/media/4dCXu15rJKMNfmyh57/giphy.gif" width="75%">

A user can login to their account by clicking the "login" button from any page on the site. A login modal will appear and the user can enter their credentials. If an incorrect email or password is entered, the user is shown an error message letting them know what went wrong. If the credentials are correct, the user is now logged in to their account and is brought back to the page they were previously on.

When logged in, the user has the option to add a rating using the stars on a movie's details page. The user can change their rating as many times as they'd like.

Login from home page:
 <img src="https://media.giphy.com/media/fEVYNv7YEQKostpITa/giphy.gif" width="75%">

Login from a movie details page:
 <img src=" <img src="https://media.giphy.com/media/ZER1jtSlMzDCUMqLsM/giphy.gif" width="75%">" width="75%">

Login error:
 <img src="https://media.giphy.com/media/dUyRyYLXv4knvZpVLd/giphy.gif" width="75%">

If an error occurs when trying to access the app, the user is shown an error modal letting them know what went wrong. If there is a 500 error, the user is asked to come back later. For all other errors, the user is shown the error message as well as a link back to the Rancid Tomatillos homepage. For example, if the user enters an incorrect url for a movie details page, they are shown a 404 error and can follow the link back to the home page.

Error handling:
 <img src="https://media.giphy.com/media/R12a4a1e8wXB3mxQls/giphy.gif" width="75%">

## Challenges

- This app was built in the short time span of 13 days.
- This was our team's first time implementing React Router, Cypress, and Express, and deploying to Heroku. Each of these new technologies came with a learning curve and many hours of research.
- Following the project spec, our team first built out this React app using conditional rendering. Once complete, we then refactored the app using Router to replace the conditional rendering. Refactoring with Router seemed to bring more challenges and complications than if we had implemented it from the beginning.
- The api's that are provided for this app are missing information, so the team had to utilize data cleaning and extensive error handling to account for each scenario.

## Future Iterations
- Add a search bar and filter options to main page
- Show user's rating on movie card on home page
- Use a database to store user ratings data so that it persists beyond one session. Our api data is stored in the Express server file, and due to Heroku limitations any new data does not persist after a user's session.
- Refining the error handling on the login modal (hiding the error message when a user clicks back into the input, do not clear inputs, etc)
- Add the ability for a user to delete their rating from a movie

## Installation and Setup

To run this app locally:

1. fork this repository
2. run ```git clone git clone git@github.com:GraceGardner/rancidtomatillos.git``` in your command line
3. Run ```cd rancidtomatillos``` to navigate into the repository
4. Run ```npm install```
5. Run ```npm start```
6. Visit ```http://localhost:3000/``` in your browser to view the Rancid Tomatillos app!
7. Open a second terminal tab and run ```npm run cypress``` (while localhost:3000 is still running) to access the cypress testing for this app

## api

For this project, we access data from two api's.

Movie and user data is accessed via the following api, built by staff at Turing.

[Movie Data api](https://rancid-tomatillos.herokuapp.com/api/v1)

Our team gave ourselves the challenge to learn and implement Express to build an api that stores all user ratings. See both the api link and repo below.

[User Ratings api repo](https://github.com/aliroemhildt/user-ratings-api)
[User Ratings api](https://user-ratings-api.herokuapp.com/api/v1/ratings)

## Tech Stack
- React
- React Router
- SCSS
- Express
- Cypress


## Contributors
[Ali Roemhildt](https://github.com/aliroemhildt)
[Grace Gardner](https://github.com/GraceGardner)
