const api = {


  get(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        if (!response.ok) {
          throw `${response.status} ${response.statusText}`
        }
        response.json()
      })
  },

  getSingleMovie(id) {
    return api.get(`movies/${id}`)
  }

}


export default api;
