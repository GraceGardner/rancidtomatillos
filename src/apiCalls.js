const api = {

  get(data) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`)
      .then(response => response.json())
  },

  // movies = get('movies');

  getSingleMovie(id) {
    return api.get(`movies/${id}`)
  }


}


export default api;
