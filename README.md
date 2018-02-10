# Friend Finder - Node and Express Servers

### Overview

This project is a compatibility-based "FriendFinder" application. This full-stack app takes in results from users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match. The app is deployed to Heroku.

## Technologies used
- HTML/CSS, Javascript, Jquery
- Bootstrap (http://getbootstrap.com)
- Font Awesome (https://fontawesome.com/)
- Node.js (https://nodejs.org/en/)
- Express.js (https://expressjs.com/)
- body-parser NPM Package (https://www.npmjs.com/package/body-parser-json)

## Built With

* Visual Sudio and Sublime Text - Text Editor
* Terminal/Gitbash

### Live App
Click [here to launch the application in your browser].

## Installation Instructions

1. Fork this repo and clone the forked repo to your computer. You will need node.js installed on your system.
2. At the command line navigate to the apps folder and run `npm install`, this will install the npm dependencies from the package.json file.
2. Then run `node server.js` the console should log the port number the app will be on (currently 8000).
4. Go to your browser and type http://localhost:8000/ to bring up the app.

---

### Instructions

1. The home page has a button to access the survey page.

![Home-Page](/app/public/assets/images/home-page.png)

2. The Survey page has 10 questions and a submit button. The user must enter
their name and a link to a picture.

![Survey-page](https://github.com/tmederos/FriendFinder/blob/master/app/public/images/survey-page.png)

3. When the submit button is pressed the user will be matched to their most
compatible friend. The name and picture of the match will be displayed as
a modal pop-up.

![Best-match](https://github.com/tmederos/FriendFinder/blob/master/app/public/images/best-match.png)

## Author

* **Trish Mederos**
