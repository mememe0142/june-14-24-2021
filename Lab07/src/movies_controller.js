const db = require('./movies_db')
const { omdbBaseUrl } = require('./config');
const fetch = require('node-fetch');

class MoviesController {

    deleteMovieByName(name) {
        let existingLength = db.movies.length;
        db.movies = db.movies.filter(it => it.name !== name);

        return new Promise((resolve, reject) => {
            if(db.movies.length < existingLength) {
                resolve({message: `${name} deleted from DB`});
            } else {
                reject(`${name} doesn't exist in DB`);
            }
        });
    }

    getMoviesByYearV0(year, res) {
        setTimeout(() => {
            let output = db.movies.filter(it => it.year === year);
            if(output.length > 0) {
                res.json(output);
            } else {
                res.end(`No movies in the database for the year ${year}`)
            } 
        }, 0);
    }

    getMoviesByYear(year) {
        return new Promise((resolve, reject) => {
            let output = db.movies.filter(it => it.year === year);
            if(output.length > 0) {
                resolve(output);
            } else {
                reject(`No movies in the database for the year ${year}`)
            }
        });
    }

    async getMovieByName(name) {
        let movie = db.movies.find(it => it.name === name);
        if(!movie) {
            await fetch(`${omdbBaseUrl}${name}`, { method: "GET"})
                    .then(res => res.json())
                    .then(data => {
                        movie = { name, year: data.Year, language: data.Language };
                        db.movies.push(movie);
                    })
                    .catch(err => movie = { error: err });
        }
        return new Promise((resolve, reject) => {
            if(!movie.error) {
                resolve(movie);
            } else {
                reject(movie.error);
            }
        });
    }

}
module.exports = MoviesController;