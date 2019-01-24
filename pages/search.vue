<template>
<v-layout column>
  <v-flex shrink>
    <v-text-field label="Enter the movie IMDB id" v-model="userMovieInput" />
    <v-btn @click="fetchMovie(userMovieInput)">Ok</v-btn>
  </v-flex>
  <movie-summary v-for="(movie, index) in movies" :key="index" class="mt-3" :movie="movie">
    <v-btn @click="addMovie(movie)">Add</v-btn>
  </movie-summary>
</v-layout>
</template>

<script>
import MovieSummary from '@/components/MovieSummary'

export default {
  components: {
    MovieSummary
  },
  data() {
    return {
      userMovieInput: '',
      movies: []
    }
  },
  methods: {
    fetchMovie(input) {
      this.$store.dispatch('searchMovie', input)
      .then((movies) => {
        this.movies = movies
      })
    },
    addMovie(movie) {
      this.$store.commit('addMovie', movie)
    }
  }
}
</script>
