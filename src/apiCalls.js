const formatDate = (date) => {
  let [year, month, day] = date.split('-')
  return [month, day, year].join('-')
}

const formatNumber = (num) => {
    var string = num.toString().split(".");
    string[0] = string[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return string.join(".");
}

const cleanData = (movie) => {
  let keys = Object.keys(movie)
  keys.forEach(key => {
    if(!movie[key] && movie[key] !== movie.tagline && movie[key] !== movie.description) {
      movie[key] = 'not available'
    } else if (!movie[key] && movie[key] === movie.overview) {
      movie[key] = 'description unavailable'
    } else if (movie[key] === movie.budget || movie[key] === movie.revenue) {
      movie[key] = `$ ${formatNumber(movie[key])}`
    } else if (movie[key] === movie.runtime) {
      movie[key] = `${movie[key]} minutes`
    } else if (movie[key] === movie.genres && movie.genres.length === 0) {
      movie.genres.push('not available')
    }
  })
  movie.average_rating = movie.average_rating.toFixed(1);
  movie.release_date = formatDate(movie.release_date);
  return movie
}

const cleanAllData = (movies) => {
  return movies.filter(movie => {
    if(movie.poster_path && movie.title && movie.average_rating){
      return movie
    }
  })
}


const api = {

  get(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        if (!response.ok) {
          throw (`${response.status} ${response.statusText}. Please reload the page and try again!`);
        }
        return response.json()
      })
  },

  getSingleMovie(id) {
    return api.get(`movies/${id}`)
    .then(data => {
      return cleanData(data.movie)
    })
  },

  getAllMovies() {
    return api.get('movies')
    .then(data => {
      return cleanAllData(data.movies)
    })
  }

};

export default api;
