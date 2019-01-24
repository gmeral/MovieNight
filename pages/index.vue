<template>
  <div>
    <v-layout v-for="(movie, index) in movies" :key="index" shrink class="mt-3">
      <img :src="movie.posterPath()" />
      <v-layout column class="ml-3">
        <h1 class="mt-3">{{movie.title()}}</h1>
        <div class="mt-3">{{movie.description()}}</div>
      </v-layout>
    </v-layout>
    <template v-if="movies.length == 0">
      <div>No movie has been selected</div>
      <nuxt-link to="/search">Go to search</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMovieInput: ''
    }
  },
  computed: {
    movies() {
      return this.$store.getters.movies
    }
  },
  methods: {
    fetchMovie(movieId) {
      this.$store.dispatch('getMovie', movieId)
    }
  }
}
</script>
