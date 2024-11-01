# RC Fit 7 - Fitness Manager

RC Fit 7 is a full-stack web application that allows users to sign-up for fitness classes with certain trainers, and track the classes they've taken.

Access the live webapp: [RC Fit 7](https://rcfit7-react-app.herokuapp.com/)

The RC Fit app has a custom administrator feature built using MongoDB that enables the admin to create classes, add trainers, and view which users are signed up to specific classes.

This project was created at Trilogy Education Services through the University of Central Florida over three weeks beginning February 2020.

![Homepage](https://media.giphy.com/media/Sw00jEgoSKOuwcRjrb/giphy.gif "Homepage")

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

<!-- | API                    |
| ---------------------- |
| Google Maps Javascript | -->

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

<!-- Set your Google API restriction to your local IP address only and then add your Google Map API key into the moodMap.jsx file

    GoogleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YourAPIKey&libraries=places` -->

Run the app from the command line

```
$ npm start
```

---

### Features

Access the live webapp: [RC Fit 7](https://rcfit7-react-app.herokuapp.com/)

#### Login/Sign Up

Login / Sign-Up in order to sign-up for a class.

![Login/SignUp](https://media.giphy.com/media/LpiJu4eJ58FU3nhs9w/giphy.gif "Login / Sign Up")

#### Schedule Class

After sigining in user can select class from upcoming classes.

![Schedule Class](https://media.giphy.com/media/TEu9ggTRGAvW9t01LP/giphy.gif "Schedule Class")

#### Remove Classes

Registered users can also remove classes from their class list by clicking cancel.

![Remove Classes](https://media.giphy.com/media/elzF3iSl9hPJgKHIXI/giphy.gif "Remove Classes")

#### User Profile

When user signs up for class they can go to their profile and view their profile information and view the classes that they signed up for with the date, time, name of class and the trainer teaching the class.

![User Profile](https://media.giphy.com/media/YnNdsXf5rwqWbpM7aV/giphy.gif "User Profile")

<!-- #### Search Movies by Map

Utilizing the Google Maps API, users can move around the map and browse countries that have movies, indicated by a golden ticket. Users can click on the ticket and view a list of top movies. Users can view movie details by hovering over each movie.

![Movies by Map](https://github.com/dahliakadri/movies_by_destination/blob/master/static/img/moodymoviebymap.gif "Movies by Map") -->

#### Admin Login

Admin has their own user login which gives them acces to their own profile page.

![Admin Login](https://media.giphy.com/media/H4zQN5KGhklzENooCO/giphy.gif "Admin Login")

#### Admin Creating Class

Admin can create classes.

![Admin Creating Class](https://media.giphy.com/media/d9BnTjOGElcrt4gpIS/giphy.gif "Admin Creating Class")

#### Admin Adding Trainer

Admin can add a trainer from the users that have been registered through using their email address to populate their names.

![Admin Adding Trainer](https://media.giphy.com/media/STwJgRLapNtTH9C8lk/giphy.gif "Admin Adding Trainer")

#### Admin Adding Trainer and Class to Schedule

Admin can assign a date, class, time, and trainer to the schedule for users to view.

![Admin Adding Trainer and Class to Schedule](https://media.giphy.com/media/Ribyw8bCqnVNbDgsmr/giphy.gif "Admin Adding Trainer and Class to Schedule")

### <a name="featuresforv2.0"></a> Features for V2.0

Future iterations of this project will include:

- Mobile interface for users.
- Users and trainers receiving notifications about upcoming classes they signed up for.
- Payment feature for users through [Stripe](https://stripe.com/docs) or [Square](https://developer.squareup.com/us/en) APIs.
- Share user classes to social media.
