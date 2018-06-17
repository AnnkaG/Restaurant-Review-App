# Restaurant Review App (Stage 1)
---


## Project Overview: Stage 1

Project fulfills three requirements:
1. Accesibilty
2. Responsivnes
3. Run Offline

In the project you can see map with the location of the restaurants. From drop down menu you can choose the area and type of restaurant. After clicking the button for "details" you can see the details of the restaurant (opening hours, reviews).

### Installation and running locally

1.	Clone this repository to your desktop.
2.	Open the root folder of the repository in a terminal
3.	Run npm i
4.	Check your python version by python -V
5.	Start local server:
	   For Python 2.x: python -m SimpleHTTPServer 8000
       For Python 3.x: python3 -m http.server 8000
6.	Open index.html on http://localhost:8000/index.html


### Project structure

1. index.html - main HTML page is
2. restaurant.html - details of the restaurants
3. css/styles.css - stylesheet
4. js/main.js - javascript file for the main page
5. js/restaurant_info.js - javascript file for the restaurant detail page 
6. js/dbhelper.js - javascript file to fetch the data from the server 
7. service-worker.js - service worker file
8. img - containes all used images

