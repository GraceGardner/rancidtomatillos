const formatDate = (date) => {
  let [year, month, day] = date.split('-');
  return [month, day, year].join('-');
}

const formatNumber = (num) => {
    var string = num.toString().split('.');
    string[0] = string[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return string.join('.');
}

const cleanData = (movie) => {
  let keys = Object.keys(movie);

  keys.forEach(key => {
    if (key === 'overview' && !movie[key]) {
      movie[key] = 'description unavailable';
    } else if (key === 'budget' && !movie.budget) {
      movie.budget =  'unavailable';
    } else if (key === 'revenue' && !movie.revenue) {
      movie.revenue =  'unavailable';
    } else if (key === 'budget' || key === 'revenue') {
      movie[key] = `$ ${formatNumber(movie[key])}`;
    } else if (key === 'runtime' && movie[key]) {
      movie[key] = `${movie[key]} minutes`;
    } else if (key === 'runtime' && !movie[key]) {
      movie[key] = 'unavailable';
    } else if (key === 'genres' && movie.genres.length === 0) {
      movie.genres.push('unavailable');
    } else if (key === 'release_date' && !movie.release_date) {
      movie.release_date = 'unavailable';
    } else if (key === 'release_date' && movie.release_date) {
      movie.release_date = formatDate(movie.release_date);
    } else if (key === 'average_rating' && movie.average_rating) {
      movie.average_rating = movie.average_rating.toFixed(1);
    } else if (key === 'average_rating' && !movie.average_rating) {
      movie.average_rating = 'unavailable';
    } else if (key === 'poster_path' && !movie.poster_path) {
      movie.poster_path = 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg';
    } else if (key === 'backdrop_path' && !movie.backdrop_path) {
      movie.backdrop_path = 'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg';
    }
  });

  movie.genres = movie.genres.join(', ');
  return movie;
}

const cleanAllData = (movies) => {
  return movies.filter(movie => {
    return movie.poster_path && movie.title && movie.average_rating && movie.id
    // {
    //   return movie
    // }
  })
}

const api = {

  get(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        if (!response.ok) {
          if (response.status >= 500) {
            throw new Error(`${response.status} ${response.statusText}. We're having some trouble loading the page. Please try again later!`);
          } else if (response.status === 404){
            throw new Error(`${response.status} ${response.statusText}. Oh no! Looks like this was a rancid tomatillo.`);
          } else {
            throw new Error(`${response.status} ${response.statusText}. Oops! Something went wrong. Please reload the page and try agian.`);
          }
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
  },

  postUser(userEmail, userPassword) {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'post',
      body: JSON.stringify({email: `${userEmail}`, password: `${userPassword}`}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  }

};

export default api;
