
class Movie {
  constructor(imdbMovie) {
    this.imdbMovie = imdbMovie
  }

  posterPath() {
    let path = this.imdbMovie.poster_path
    return path ? `https://image.tmdb.org/t/p/w500${path}` : ''
  }

  thumbnailPath() {
    let path = this.imdbMovie.poster_path
    return path ? `https://image.tmdb.org/t/p/w92${path}` : ''
  }

  title() {
    return this.imdbMovie.original_title
  }

  description() {
    return this.imdbMovie.overview
  }

  id() {
    return this.imdbMovie.id
  }
}

export default Movie
