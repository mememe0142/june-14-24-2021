* Create a new Node JS project called __Lab07__
* Install the dependencies express and nodemon
* Have the following structure created

```
[lab07]
	- [src]
		- movies_db.js
		- movies_controller.js
	- package.json
	- index.js
	
```

* __movies_db.js__ has the following array which will act as a db

``` javascript
	movies: [ 
		{ id: "m101", name: "Sultan", year: 2015, language: "Hindi" },
		{ id: "m102", name: "Lagaan", year: 2002, language: "Hindi" },
		{ id: "m103", name: "Kaala", year: 2019, language: "Tamil" }
	]	
```

<br/>

* Build the following API to perform CRUD operations on the movies collection

* __GET /api/movie/:name__ to get the movie with a given name. This endpoint looks for a movie in the DB. If it's not available, you have to connect to the following site __**http://www.omdbapi.com/?i=tt3896198&apikey=52d1c7f**__ and fetch the details of the movie. For example, if you want information about __Dabangg__ movie use this URL __http://www.omdbapi.com/?i=tt3896198&apikey=52d1c7f&t=Dabangg__
* __DELETE api/movie/:name__ to delete the movie from the DB
* __GET /api/movies/:year__ to list all the movies released in the given year from the DB

<br/><br/>

* Duplication of movies are not allowed
* Your routes should be in __index.js__
* The core logic to manipulate the movies_db.js should be in movies_controller.js
* Use promises wherever required
* Test your endpoints from __POSTMAN__. You don't need to build HTML files
