# RC Fit 7 - Fitness Manager

RC Fit 7 is a full-stack web application that allows users to sign-up for fitness classes with certain trainers, and track the classes they've taken.

Access the live webapp: [RC Fit 7](https://rcfit7-react-app.herokuapp.com/)

The RC Fit app has a custom administrator feature built using MongoDB that enables the admin to create classes, add trainers, and view which users are signed up to specific classes.

This project was created at Trilogy Education Services through the University of Central Florida over three weeks beginning February 2020.

![Homepage](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovie.gif "Homepage")

## Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [Features for V2.0](#featuresforv2.0)
- [About the Developers](#aboutthedeveloper)

### Technologies

| Backend  | Frontend           |
| -------- | ------------------ |
| Node     | Javascript 6       |
| MongoDB  | React 16.2         |
| Mongoose | CSS3               |
| Express  | Twitter Bootstrap  |
| Axios    | React Big Calendar |
| Moment   | React Router Dom   |
| Passport | HTML5              |
| Nodemon  | jQuery 3.4.1       |

| API                    |
| ---------------------- |
| Google Maps Javascript |

---

### Installation

#### Prerequisites

You must have the following installed to run RC Fit 7:

- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [.env](https://www.npmjs.com/package/dotenv)
- [API key for Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/tutorial)

#### Run RC Fit 7 on your local computer

Download Compass GUI from [MongoDB Compass](https://www.mongodb.com/products/compass) or the Robo3t GUI from [Robomongo](https://robomongo.org/)

> Both Compass and Robo 3t allow you to view the data that is being persisted to your database locally. Gives you the ability to modify, insert, and delete data manually in the GUI.

Clone or fork repository:

    $ git clone git@github.com:Nadia-Kadri/RCFit7.git

Create environment inside your root directory:

```
$ touch .env
```

Inside of .env file insert:

```
PASSPORT_SECRET=developer
```

You may change the word 'developer' to whatever you like. This word is used when encrypting and decrypting the user's password for Passport.js

Install dependencies:

```
$ npm install
```

Set your Google API restriction to your local IP address only and then add your Google Map API key into the moodMap.jsx file

    GoogleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YourAPIKey&libraries=places`

Run the app from the command line

```
$ npm start
```

---

### Features

Access the live webapp: [Moody Movies](http://moodymovies.sadraii.com)

#### Login/Sign Up

![Login/SignUp](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovielogin.gif "Login / Sign Up")

#### User Profile

<img src="https://github.com/dahliakadri/movies_by_destination/raw/master/static/img/moodymovieprofile.png" alt="Profile" width="600">

#### Search Movies by Country

A drop down menue of all countries with movies appear on the homepage. Users can click on any country and view a list of top movies. Users can view movie details by hovering over each movie.

![Movies by Country](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymoviebycountry.gif "Movies by Country")

#### Search Movies by Map

Utilizing the Google Maps API, users can move around the map and browse countries that have movies, indicated by a golden ticket. Users can click on the ticket and view a list of top movies. Users can view movie details by hovering over each movie.

![Movies by Map](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymoviebymap.gif "Movies by Map")

#### Add Movies to Favorites

Registered users can save movies to their favorites list by clicking on as many movies as they want from a particular search and adding them. This can also be done by utilizing the Google Maps feature.

![Add Movies](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovieaddmovie.gif "Add Movies to Favorites")

#### Remove Movies from Favorites

Registered users can also remove movies from their favorites by clicking one or mutliple movies in their current favorites list and deleting.

![Remove Movies](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovieremovemovie.gif "Remove Movies to Favorites")

#### Logout

![Logout](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymovielogout.gif "Moody Logout")

---

### <a name="featuresforv2.0"></a> Features for V2.0

Future iterations of this project will include:

- Mobile interface for users.
- Users and trainers receiving notifications about upcoming classes they signed up for.
- Payment feature for users through [Stripe](https://stripe.com/docs) or [Square](https://developer.squareup.com/us/en) APIs.
- Share user classes to social media.

---

### <a name="aboutthedeveloper"></a> About the Developer

RC Fit 7 creators and designers:

[<img src="https://media-exp1.licdn.com/dms/image/C4D03AQH9bImUzEztVQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=8Q89ixVklNYqqmnkjXeBlcBBSphqYJct9FD0dVa22Jw" height="70px" width="70px">](https://github.com/Nadia-Kadri)<br>
[Nadia Kadri](https://github.com/Nadia-Kadri) is a Financial Analyst at Lockheed Martin pursuing a career in software engineering. She can be found on [LinkedIn](https://www.linkedin.com/in/nadia-kadri-334415b3/) and [Github](https://github.com/Nadia-Kadri).<br>

[<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFuF0ueWRw_tw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=nSqWVySUot2gTW_FialUtZQUlYNMp8WsDo7iQedVP50" height="70px" width="70px">](https://github.com/maserallm)<br>
[Maserall Marcelin](https://github.com/maserallm) is an Inventory Analyst at Publix Supermarkets, Inc. turned software developer. He can be found on [LinkedIn](https://www.linkedin.com/in/maserall-marcelin-76067a12b/) and [Github](https://github.com/maserallm).
