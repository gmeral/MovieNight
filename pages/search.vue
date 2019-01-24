<template>
<v-layout column>
  <v-flex shrink>
    <v-text-field label="Enter the movie IMDB id" v-model="userMovieInput" />
    <v-btn @click="fetchMovie(userMovieInput)">Ok</v-btn>
  </v-flex>
  <v-layout v-for="(movie, index) in movies" :key="index" shrink class="mt-3">
    <img :src="movie.posterPath()" />
    <v-layout column class="ml-3">
      <h1 class="mt-3">{{movie.title()}}</h1>
      <div class="mt-3">{{movie.description()}}</div>
      <v-btn @click="addMovie(movie)">Add</v-btn>
    </v-layout>
  </v-layout>
</v-layout>
</template>

<script>
export default {
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
