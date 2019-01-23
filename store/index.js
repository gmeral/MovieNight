import axios from 'axios'

function get(url) {
  return axios.get(url)
    .then((response) => {
      return response.data
    })
}

export const actions = {
  getMovie(context, movieId) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c88ea19d49b9892551c506649a09559c&language=en-US`
    return get(url)
  },
  getPosterUrl(context, posterPath) {
    let url = `https://image.tmdb.org/t/p/w500${posterPath}`
    return Promise.resolve(url)
  }
}
