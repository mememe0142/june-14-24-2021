module.exports = {
    port: 8080,
    omdbBaseUrl: " http://www.omdbapi.com/?i=tt3896198&apikey=52d1c7f&t=",
    routes: {
        GET_MOVIES_BY_YEAR: '/api/movies/:year',
        DELETE_MOVIE_BY_NAME: '/api/movie/:name',
        GET_MOVIE_BY_NAME: '/api/movie/:name'
    }
};