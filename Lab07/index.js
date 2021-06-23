const config = require("./src/config");
const express = require("express");
const MoviesController = require('./src/movies_controller');
const app = express();
const { routes, port } = config
const moviesController = new MoviesController();

app.get('/api/v0/movies/:year', (req, res) => {
    let { year } = req.params;
    moviesController.getMoviesByYearV0(parseInt(year), res);
        
});

app.get(routes.GET_MOVIES_BY_YEAR, (req, res) => {
    let { year } = req.params;
    moviesController
        .getMoviesByYear(parseInt(year))
        .then(data => res.json(data))
        .catch(err => res.end(err));
});

app.get(routes.GET_MOVIE_BY_NAME, (req, res) => {
    let { name } = req.params;
    moviesController
        .getMovieByName(name)
        .then(data => res.json(data))
        .catch(err => res.end(err));
});

app.delete(routes.DELETE_MOVIE_BY_NAME, (req, res) => {
    let {name} = req.params;
    moviesController
        .deleteMovieByName(name)
        .then(data => res.json(data))
        .catch(err => res.end(err));
});


app.listen(port, () => {
    console.log(`Server started in ${port}`);
});
