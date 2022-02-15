# Rancid Tomatillos

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
Welcome to Rancid Tomatillos! This is a web app that displays movies, their Rancid Tomatillo rating, and a detailed description of each movie. Users can login to add their own rating to each movie.

## Project Goals

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router
- Build an api using Express and deploy to Heroku
- Learn and implement Cypress end to end testing

## Challenges

- Rancid Tomatillos was built in 13 days
- We used Express, Router and Cypress for the first time
- This was also our first time deploying to Heroku

## Project Specs
When the Rancid Tomatillos app loads, the user will see the home page with all movies displayed. Each movie card includes the movie's cover photo, title, and Rancid Tomatillo rating.

When a user clicks on a movie card, they are brought to a new page that displays additional details for that movie.

## Future Iterations
- search bar
- filter/sort
- show user rating on movie card on home page
- use a database to store user ratings data so that it persists beyond one session
- additional error handling for login modal (hide error message when a user clicks back into the input, do not clear inputs, etc)

## Deployed Site
View app in your browser by visiting : https://rancidtomatillos2110.herokuapp.com/

## Setup
To run locally
In your terminal run:
git clone git@github.com:GraceGardner/rancidtomatillos.git
cd rancidtomatillos
npm install
npm start

Rancid Tomatillos will run in your browser on localhost:3000

## api
For this project we access data from two api's. Movie and user data is accessed via the following api, built by staff at Turing.

[Movie Data api](https://rancid-tomatillos.herokuapp.com/api/v1)

We used Express to build an api that stores all user ratings. See both the api link and repo below.

[User Ratings api repo](https://github.com/aliroemhildt/user-ratings-api)
[User Ratings api](https://user-ratings-api.herokuapp.com/api/v1/ratings)

## Tech Stack
JavaScript, React, Router, SCSS, Express, Cypress

## Contributors
[Ali Roemhildt](https://github.com/aliroemhildt)
[Grace Gardner](https://github.com/GraceGardner)
