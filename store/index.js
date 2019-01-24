import axios from 'axios'
import Vue from 'vue'
import Movie from '@/model/movie.js'

function get(url) {
  return axios.get(url)
    .then((response) => {
      return response.data
    })
}

export const state = () => {
  return {
    movies: {}
  }
}

export const actions = {
  getMovie(context, movieId) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c88ea19d49b9892551c506649a09559c&language=en-US`
    get(url)
      .then((movie) => {
        context.commit('addMovie', new Movie(movie))
      })
  },
  searchMovie(context, searchQuery) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=c88ea19d49b9892551c506649a09559c&query=${searchQuery}`
    return get(url)
      .then((data) => {
        return data.results.map((raw) => new Movie(raw))
      })
  }
}

export const getters = {
  movies(state) {
    return Object.values(state.movies)
  }
}

export const mutations = {
  addMovie(state, movie) {
    Vue.set(state.movies, movie.id(), movie)
  }
}
